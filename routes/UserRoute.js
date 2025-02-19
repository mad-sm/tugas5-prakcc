import express from "express";
import {
  getUsers,
  createUser,
  // getUserById,
  // updateUser,
  // deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
// router.get("/users/:id", getUserById);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
