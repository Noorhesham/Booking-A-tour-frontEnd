import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const UpdateSchema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }).optional(),
  email: z.string().email({ message: "provide a valid email" }).optional(),
});
export const UpdatePasswordSchema = z
  .object({
    passwordCurrent: z.string().min(4, { message: "Current Password is required" }),
    password: z.string().min(4, { message: "provide a valid password" }).optional(),
    passwordConfirm: z.string().min(4, { message: "New Password is required" }),
  })
  .refine(
    (data) => {
      if (data.passwordConfirm !== data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Passwords need to match!",
    }
  );
