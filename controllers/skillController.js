import Skill from "../models/skillModel.js";

// GET all skills
export const getSkills = async (req, res) => {
	try {
		const skills = await Skill.find().sort({ createdAt: -1 });
		res.json(skills);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single skill by ID
export const getSkillById = async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id);
		if (!skill) return res.status(404).json({ message: "Skill not found" });
		res.json(skill);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new skill
export const createSkill = async (req, res) => {
	const { name, category, level } = req.body;
	const newSkill = new Skill({ name, category, level });

	try {
		const savedSkill = await newSkill.save();
		res.status(201).json(savedSkill);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update a skill
export const updateSkill = async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id);
		if (!skill) return res.status(404).json({ message: "Skill not found" });

		Object.assign(skill, req.body);
		const updatedSkill = await skill.save();
		res.json(updatedSkill);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE a skill
export const deleteSkill = async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id);
		if (!skill) return res.status(404).json({ message: "Skill not found" });

		await skill.remove();
		res.json({ message: "Skill deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
