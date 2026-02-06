import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    console.log("Zod err:", error);

    if (error instanceof ZodError) {
      return res.status(400).json({
        message: "Validation Error",
        error: error.issues,
      });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};
