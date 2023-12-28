import { Router } from "express";
import {
  createStarred,
  deleteStarred,
  getStarred,
} from "../controllers/starred.controller.js";

const router = Router();

router.route("/").get(getStarred).post(createStarred);

router.route("/:id").delete(deleteStarred);

export default router;