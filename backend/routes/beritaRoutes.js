const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    status: "OK",
  });
});

const {
  tambahBerita,
  getBerita,
  getDetailBerita,
  hapusBerita,
} = require("../controllers/beritaController");

const upload = require("../middleware/uploadMiddleware");

router.post("/", upload.single("thumbnail"), tambahBerita);

router.get("/", getBerita);

router.get("/slug/:slug", getDetailBerita);

router.delete("/:id", hapusBerita);

module.exports = router;
