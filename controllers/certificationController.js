import Certification from "../models/certificationModel.js";

// GET all certifications
export const getCertifications = async (req, res) => {
	try {
		const certifications = await Certification.find();
		res.json(certifications);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single certification by ID
export const getCertificationById = async (req, res) => {
	try {
		const certification = await Certification.findById(req.params.id);
		if (!certification)
			return res.status(404).json({ message: "Certification not found" });
		res.json(certification);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new certification
export const createCertification = async (req, res) => {
	const { title, provider, dateObtained, certificateUrl } = req.body;
	const newCertification = new Certification({
		title,
		provider,
		dateObtained,
		certificateUrl,
	});

	try {
		const savedCertification = await newCertification.save();
		res.status(201).json(savedCertification);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update a certification
export const updateCertification = async (req, res) => {
	try {
		const certification = await Certification.findById(req.params.id);
		if (!certification)
			return res.status(404).json({ message: "Certification not found" });

		Object.assign(certification, req.body);
		const updatedCertification = await certification.save();
		res.json(updatedCertification);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE a certification
export const deleteCertification = async (req, res) => {
	try {
		const certification = await Certification.findById(req.params.id);
		if (!certification)
			return res.status(404).json({ message: "Certification not found" });

		await certification.remove();
		res.json({ message: "Certification deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
