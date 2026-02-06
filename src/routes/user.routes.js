import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createUserDTO, updateUserDTO } from "../dto/user.dto.js";

const router = Router();

router.get("/", getUsers);

router.post("/", validate(createUserDTO), createUser);

router.put("/:id", validate(updateUserDTO), updateUser);

router.delete("/:id", deleteUser);

export default router;
