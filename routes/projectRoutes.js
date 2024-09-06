import express from "express";
import upload from "../middlewares/multerConfig.js";
import {
	getProjects,
	getProjectById,
	createProject,
	updateProject,
	deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Routes for Project
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", upload.single("image"), createProject);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

export default router;
