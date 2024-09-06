import express from "express";
import {
	getCertifications,
	getCertificationById,
	createCertification,
	updateCertification,
	deleteCertification,
} from "../controllers/certificationController.js";

const router = express.Router();

// Routes for Certification
router.get("/", getCertifications);
router.get("/:id", getCertificationById);
router.post("/", createCertification);
router.put("/:id", updateCertification);
router.delete("/:id", deleteCertification);

export default router;
