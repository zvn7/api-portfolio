import Project from "../models/projectModel.js";
import imagekit from "../helpers/imagekit.js";

// GET all projects
export const getProjects = async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single project by ID
export const getProjectById = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) return res.status(404).json({ message: "Project not found" });
		res.json(project);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new project
export const createProject = async (req, res) => {
	const { title, description, category, technologies, url, repository } =
		req.body;
	let { image } = req.file; // Get the uploaded file

	try {
		// Upload image to ImageKit
		if (image) {
			const uploadedImage = await imagekit.upload({
				file: image.buffer, // File buffer from multer
				fileName: image.originalname, // Original file name
				folder: "projects", // Optional folder in ImageKit
			});

			imageUrl = uploadedImage.url; // Get the URL of the uploaded image
		}

		// Create a new project with image URL
		const newProject = new Project({
			title,
			description,
			category,
			technologies,
			url,
			repository,
			image: imageUrl, // Image URL
		});

		const savedProject = await newProject.save();
		res.status(201).json(savedProject);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update a project
export const updateProject = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) return res.status(404).json({ message: "Project not found" });

		let { image } = req.file;

		// Update image if a new one is provided
		if (image) {
			const uploadedImage = await imagekit.upload({
				file: image.buffer,
				fileName: image.originalname,
				folder: "projects",
			});

			req.body.image = uploadedImage.url;
		}

		Object.assign(project, req.body);
		const updatedProject = await project.save();
		res.json(updatedProject);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE a project
export const deleteProject = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) return res.status(404).json({ message: "Project not found" });

		await project.remove();
		res.json({ message: "Project deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
