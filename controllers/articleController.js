import Article from "../models/articlesModel.js";
import imagekit from "../helpers/imagekit.js";

const calculateReadingTime = (content) => {
	const wordsPerMinute = 200;
	const textLength = content.split(/\s+/).length;
	const minutes = Math.ceil(textLength / wordsPerMinute);
	return minutes;
};

// GET all articles
export const getArticles = async (req, res) => {
	try {
		const articles = await Article.find().sort({ createdAt: -1 });
		res.json(articles);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET a single article by ID
export const getArticleById = async (req, res) => {
	try {
		const article = await Article.findById(req.params.id);
		if (!article) return res.status(404).json({ message: "Article not found" });
		res.json(article);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST create a new article
export const createArticle = async (req, res) => {
	const { title, publicationDate, content, author, tags, summary } = req.body;
	const image = req.file;

	if (!image) {
		return res.status(400).json({ message: "Image is required" });
	}

	try {
		const uploadedImage = await imagekit.upload({
			file: image.buffer,
			fileName: image.originalname,
			folder: "articles",
		});

		const imageUrl = uploadedImage.url;

		const readingTime = calculateReadingTime(content);

		const newArticle = new Article({
			title,
			publicationDate,
			content,
			image: imageUrl,
			author,
			tags,
			readingTime,
			summary,
		});

		const savedArticle = await newArticle.save();
		res.status(201).json(savedArticle);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PUT update an article
export const updateArticle = async (req, res) => {
	try {
		const article = await Article.findById(req.params.id);
		if (!article) return res.status(404).json({ message: "Article not found" });

		const image = req.file;

		if (image) {
			const uploadedImage = await imagekit.upload({
				file: image.buffer,
				fileName: image.originalname,
				folder: "articles",
			});

			req.body.image = uploadedImage.url;
		}

		Object.assign(article, req.body);
		const updatedArticle = await article.save();
		res.json(updatedArticle);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// DELETE an article
export const deleteArticle = async (req, res) => {
	try {
		const article = await Article.findById(req.params.id);
		if (!article) return res.status(404).json({ message: "Article not found" });

		await article.remove();
		res.json({ message: "Article deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
