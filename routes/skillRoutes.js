import express from "express";
import {
	getSkills,
	getSkillById,
	createSkill,
	updateSkill,
	deleteSkill,
} from "../controllers/skillController.js";

const router = express.Router();

// Routes for Skill
router.get("/", getSkills);
router.get("/:id", getSkillById);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
