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
// POST create a new project
export const createProject = async (req, res) => {
	const { title, description, category, technologies, url, repository } =
		req.body;
	let { image } = req.file;

	let imageUrl = ""; // Inisialisasi imageUrl dengan nilai default

	try {
		// Cek jika ada file image yang di-upload
		if (image) {
			const uploadedImage = await imagekit.upload({
				file: image.buffer,
				fileName: image.originalname,
				folder: "projects",
			});
			imageUrl = uploadedImage.url;
		}

		// Membuat project baru
		const newProject = new Project({
			title,
			description,
			category,
			technologies,
			url,
			repository,
			image: imageUrl, // Tetapkan imageUrl, meskipun kosong
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
