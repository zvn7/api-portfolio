import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: [String],
			required: true,
			enum: ["Website", "Application", "API", "UI/UX"],
			message: "Category must be one of: Website, Application, API, UI/UX",
		},
		technologies: {
			type: [String],
			required: true,
		},
		url: {
			type: String,
		},
		repository: {
			type: String,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
