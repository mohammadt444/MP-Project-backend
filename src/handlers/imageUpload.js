import multer from "multer";

const fileStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

export const fileUploadMiddleware = multer({
  storage: fileStorageConfig,
}).single("image");

export const fileUploadHandler = (req, res) => {
  res.json({
    result: "done",
    imageUrl: `/image/${req.file.filename}`,
  });
};
