import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import certificationRoutes from "./routes/certificationRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

// connect db
ConnectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/experiences", experienceRoutes);
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/education", educationRoutes);
app.use("/api/v1/certifications", certificationRoutes);

// port
const port = process.env.PORT;

// server
app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
