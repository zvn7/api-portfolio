import Education from "../models/educationModel.js";

// GET all education records
export const getEducation = async (req, res) => {
	try {
		const educationRecords = await Education.find().sort({ createdAt: -1 });
		res.json(educationRecords);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single education record by ID
export const getEducationById = async (req, res) => {
	try {
		const educationRecord = await Education.findById(req.params.id);
		if (!educationRecord)
			return res.status(404).json({ message: "Education record not found" });
		res.json(educationRecord);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new education record
export const createEducation = async (req, res) => {
	const { institution, fieldOfStudy, startDate, endDate, description } =
		req.body;
	const newEducation = new Education({
		institution,
		fieldOfStudy,
		startDate,
		endDate,
		description,
	});

	try {
		const savedEducation = await newEducation.save();
		res.status(201).json(savedEducation);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update an education record
export const updateEducation = async (req, res) => {
	try {
		const educationRecord = await Education.findById(req.params.id);
		if (!educationRecord)
			return res.status(404).json({ message: "Education record not found" });

		Object.assign(educationRecord, req.body);
		const updatedEducation = await educationRecord.save();
		res.json(updatedEducation);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE an education record
export const deleteEducation = async (req, res) => {
	try {
		const educationRecord = await Education.findById(req.params.id);
		if (!educationRecord)
			return res.status(404).json({ message: "Education record not found" });

		await educationRecord.remove();
		res.json({ message: "Education record deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
