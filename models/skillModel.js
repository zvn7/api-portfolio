import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		level: {
			type: String,
			default: "beginner",
		},
	},
	{
		timestamps: true,
	}
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
