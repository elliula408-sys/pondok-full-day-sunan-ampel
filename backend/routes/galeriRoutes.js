const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  tambahGaleri,
  getGaleri,
  hapusGaleri,
} = require("../controllers/galeriController");

router.post("/", upload.single("foto"), tambahGaleri);

router.get("/", getGaleri);

router.delete("/:id", hapusGaleri);

module.exports = router;
