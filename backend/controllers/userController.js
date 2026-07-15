const db = require("../config/db");

exports.getUsers = (req, res) => {
  const sql = `
  SELECT
  u.id,
  u.username,
  u.email,
  u.created_at,

  (
      SELECT COUNT(*)
      FROM ppdb p
      WHERE p.user_id = u.id
  ) as sudah_daftar

  FROM users u
  ORDER BY u.id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};
