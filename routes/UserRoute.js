import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/add-user", createUser);
router.put("/edit-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
