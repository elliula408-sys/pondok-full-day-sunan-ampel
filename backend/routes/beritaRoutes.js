const express = require("express");

const router = express.Router();

const {
  tambahBerita,
  getBerita,
  detailBerita,
  hapusBerita,
} = require("../controllers/beritaController");

const upload = require("../middleware/uploadMiddleware");

router.post("/", upload.single("thumbnail"), tambahBerita);

router.get("/", getBerita);

router.get("/:id", detailBerita);

router.delete("/:id", hapusBerita);

module.exports = router;
