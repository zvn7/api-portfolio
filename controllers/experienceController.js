import Experience from "../models/experienceModel.js";

// GET all experiences
export const getExperiences = async (req, res) => {
	try {
		const experiences = await Experience.find().sort({ createdAt: -1 });
		res.json(experiences);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single experience by ID
export const getExperienceById = async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id);
		if (!experience)
			return res.status(404).json({ message: "Experience not found" });
		res.json(experience);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new experience
export const createExperience = async (req, res) => {
	const { company, position, startDate, endDate, description } = req.body;
	const newExperience = new Experience({
		company,
		position,
		startDate,
		endDate,
		description,
	});

	try {
		const savedExperience = await newExperience.save();
		res.status(201).json(savedExperience);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update an experience
export const updateExperience = async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id);
		if (!experience)
			return res.status(404).json({ message: "Experience not found" });

		Object.assign(experience, req.body);
		const updatedExperience = await experience.save();
		res.json(updatedExperience);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE an experience
export const deleteExperience = async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id);
		if (!experience)
			return res.status(404).json({ message: "Experience not found" });

		await experience.remove();
		res.json({ message: "Experience deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
