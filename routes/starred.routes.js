import { Router } from "express";
import {
  createStarred,
  deleteStarred,
  getStarred,
  updateStarred,
} from "../controllers/starred.controller.js";

const router = Router();

router.route("/").get(getStarred).post(createStarred);

router.route("/:id").patch(updateStarred).delete(deleteStarred);

export default router;
