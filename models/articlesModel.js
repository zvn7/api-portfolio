import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		publicationDate: {
			type: Date,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		image: {
			type: String,
            required: true,
		},
		author: {
			type: String,
			required: true,
		},
		tags: {
			type: [String],
		},
		readingTime: {
			type: Number,
		},
		summary: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
