import { z } from "zod";

export const createUserDTO = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone must be at least 7 characters")
    .max(20, "Phone must be at most 20 characters"),
  role: z.enum(["user", "admin"]).default("user"),
  isActive: z.boolean().default(true),
});

export const updateUserDTO = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone must be at least 7 characters")
    .max(20, "Phone must be at most 20 characters"),
  role: z.enum(["user", "admin"]),
  isActive: z.boolean(),
});
