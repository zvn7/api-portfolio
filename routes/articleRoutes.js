import express from "express";
import upload from "../middlewares/multerConfig.js";
import {
	getArticles,
	getArticleById,
	createArticle,
	updateArticle,
	deleteArticle,
} from "../controllers/articleController.js";

const router = express.Router();

// Routes for Article
router.get("/", getArticles);
router.get("/:id", getArticleById);
router.post("/", upload.single("image"), createArticle);
router.put("/:id", upload.single("image"), updateArticle);
router.delete("/:id", deleteArticle);

export default router;
