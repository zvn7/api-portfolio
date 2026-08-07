import express from "express";
import upload from "../middlewares/multerConfig.js";
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
router.post("/", upload.single("image"), createCertification);
router.put("/:id", upload.single("image"), updateCertification);
router.delete("/:id", deleteCertification);

export default router;
