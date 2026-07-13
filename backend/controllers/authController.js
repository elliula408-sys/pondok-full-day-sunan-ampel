const db = require("../config/db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username,email,password) VALUES (?,?,?)";

    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Register berhasil",
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username=?";

  db.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    const user = result[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Password salah",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  });
};

module.exports = {
  register,
  login,
};
