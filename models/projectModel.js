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
			type: String,
			required: true,
			enum: ['website', 'aplikasi', 'api', 'uiux'],
			message: 'Category must be one of: website, aplikasi, api, uiux'
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
