import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
	{
		institution: {
			type: String,
			required: true,
		},
		fieldOfStudy: {
			type: String,
		},
		startDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Education = mongoose.model("Education", educationSchema);

export default Education;
