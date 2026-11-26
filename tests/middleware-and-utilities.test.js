import { describe, expect, it, vi } from "vitest";
import { HttpError } from "../src/utils/HttpError.js";
import { isAdmin } from "../src/utils/permissions.js";
import { errorHandler, notFound } from "../src/middlewares/error.middleware.js";

function createResponse() {
  const res = {
    status: vi.fn(),
    json: vi.fn()
  };
  res.status.mockReturnValue(res);
  res.json.mockReturnValue(res);
  return res;
}

describe("HttpError", () => {
  it("retains the HTTP status and message", () => {
    const error = new HttpError(404, "Experiment not found");

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("HttpError");
    expect(error.status).toBe(404);
    expect(error.message).toBe("Experiment not found");
  });
});

describe("isAdmin", () => {
  it("returns true for an admin user", () => {
    expect(isAdmin({ admin: true })).toBe(true);
  });

  it("returns false for a non-admin user", () => {
    expect(isAdmin({ admin: false })).toBe(false);
  });
});

describe("notFound middleware", () => {
  it("passes a 404 HttpError containing the request method and URL", () => {
    const next = vi.fn();

    notFound({ method: "GET", originalUrl: "/api/experiments/missing" }, {}, next);

    expect(next).toHaveBeenCalledOnce();
    const [error] = next.mock.calls[0];
    expect(error).toBeInstanceOf(HttpError);
    expect(error.status).toBe(404);
    expect(error.message).toBe("No existe la ruta GET /api/experiments/missing");
  });
});

describe("errorHandler middleware", () => {
  it("returns the status and message from an HttpError", () => {
    const res = createResponse();

    errorHandler(new HttpError(403, "Forbidden"), {}, res, vi.fn());

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: "Forbidden" });
  });

  it("returns a client error for malformed JSON", () => {
    const res = createResponse();

    errorHandler({ type: "entity.parse.failed" }, {}, res, vi.fn());

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "El body no es un JSON válido" });
  });

  it("hides unexpected error details and returns a server error", () => {
    const res = createResponse();
    const error = new Error("database password must not be exposed");
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    errorHandler(error, {}, res, vi.fn());

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error interno del servidor" });
    expect(consoleError).toHaveBeenCalledWith(error);
  });
});
