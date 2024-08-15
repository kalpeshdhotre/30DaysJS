const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
// Set storage engine for multer
const storage = multer.diskStorage({
	destination: "../images/",
	filename: (req, file, cb) => {
		cb(null, `post${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({ storage: storage });

// Middleware to handle file upload
app.post("/images", upload.single("image"), (req, res) => {
	if (!req.file) {
		return res.status(400).send("No file uploaded.");
	}
	res.status(200).send({
		message: "File uploaded successfully.",
		filePath: `/images/${req.file.filename}`,
	});
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});
