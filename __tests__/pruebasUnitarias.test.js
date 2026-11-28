import { afterEach, describe, expect, it, vi } from 'vitest';
import jwt from 'jsonwebtoken';
import { isAuthenticated, isAdmin } from '../src/middlewares/auth.middleware.js';
import { HttpError } from '../src/utils/HttpError.js';

describe('Middlewares de autenticación', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('rechaza una solicitud sin token', () => {
        const req = { headers: {} };
        const next = vi.fn();

        isAuthenticated(req, {}, next);

        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(
            expect.objectContaining({
                message: 'No hay token de autenticación',
                status: 401
            })
        );
        expect(next.mock.calls[0][0]).toBeInstanceOf(HttpError);
    });

    it('asigna el usuario autenticado a la solicitud', () => {
        vi.spyOn(jwt, 'verify').mockReturnValue({
            username: 'user-id',
            admin: false
        });

        const req = {
            headers: { authorization: 'Bearer valid-token' }
        };
        const next = vi.fn();

        isAuthenticated(req, {}, next);

        expect(req.user).toEqual({
            username: 'user-id',
            admin: false
        });
        expect(next).toHaveBeenCalledOnce();
        expect(next).toHaveBeenCalledWith();
    });

    it('permite el acceso a un administrador', () => {
        const req = { user: { admin: true } };
        const next = vi.fn();

        isAdmin(req, {}, next);

        expect(next).toHaveBeenCalledOnce();
        expect(next).toHaveBeenCalledWith();
    });

    it('rechaza el acceso a un usuario que no es administrador', () => {
        const req = { user: { admin: false } };
        const next = vi.fn();

        isAdmin(req, {}, next);

        expect(next).toHaveBeenCalledOnce();
        expect(next.mock.calls[0][0]).toBeInstanceOf(HttpError);
        expect(next).toHaveBeenCalledWith(
            expect.objectContaining({
                message: 'No tienes permiso',
                status: 403
            })
        );
    });
});