const path = require("path");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const FileModel = require("../model/file");

// console.log(uuidv4() + ".pdf .jpg .js");

// Where to store / save the file?
// File new name to save?

const uploadFolerPath = "uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolerPath),
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    const filename = uuidv4() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024,
  },
}).single("attachment");

const uploadFile = (req, res) => {
  upload(req, res, async (error) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "File size too large",
      });
    }
    console.log(req.file);
    const fileData = {
      originalName: req.file.originalname,
      newName: req.file.filename,
      size: req.file.size,
    };
    await FileModel.create(fileData);
    // console.log(req.body);
    res.json({
      success: true,
      message: "File uploaded succesfully",
    });
  });
};

const fileController = {
  uploadFile,
};

module.exports = fileController;
