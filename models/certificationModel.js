import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		provider: {
			type: String,
			required: true,
		},
		dateObtained: {
			type: Date,
			required: true,
		},
		certificateUrl: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Certification = mongoose.model("Certification", certificationSchema);

export default Certification;
