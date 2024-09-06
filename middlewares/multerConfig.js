import multer from "multer";
import path from "path";

// Konfigurasi penyimpanan file
const storage = multer.memoryStorage();

const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		// Hanya menerima file gambar
		const filetypes = /jpeg|jpg|png/;
		const mimetype = filetypes.test(file.mimetype);
		const extname = filetypes.test(
			path.extname(file.originalname).toLowerCase()
		);

		if (mimetype && extname) {
			return cb(null, true);
		}
		cb(new Error("File type not allowed"));
	},
});

export default upload;
