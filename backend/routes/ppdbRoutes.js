const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  daftarPPDB,
  getPPDBUser,
  getSemuaPPDB,
  updateStatus,
} = require("../controllers/ppdbController");

router.post(
  "/",
  upload.fields([
    {
      name: "foto",
      maxCount: 1,
    },
    {
      name: "kk",
      maxCount: 1,
    },
    {
      name: "akta",
      maxCount: 1,
    },
  ]),
  daftarPPDB,
);

router.get("/", getSemuaPPDB);

router.get("/user/:user_id", getPPDBUser);

router.put("/status/:id", updateStatus);

module.exports = router;
