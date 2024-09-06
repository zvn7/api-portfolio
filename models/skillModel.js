import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true, // frontend, backend, database, etc.
		},
		level: {
			type: String, // beginner, intermediate, advanced
			default: "beginner",
		},
	},
	{
		timestamps: true,
	}
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
