import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: true,
      trim: true,
      minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
      maxlength: [20, "El nombre de usuario no puede tener más de 20 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "El email no es válido"],
    },
    password: {
      type: String, // siempre el HASH de bcrypt, nunca la contraseña en claro
      required: [true, "La contraseña es obligatoria"],
      select: false, // no se devuelve en las consultas salvo que se pida con .select("+password")
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // añade createdAt y updatedAt
    toJSON: {
      // Al convertir a JSON (res.json) quitamos la contraseña y __v
      transform: (_doc, ret) => {
        const { password, __v, ...user } = ret;
        return user;
      },
    },
  },
);

export const UserModel = model("User", userSchema);