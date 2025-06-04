const db = require("../db.js");

exports.getAllItems = (req, res) => {
  db.query("select * from items", (err, results) => {
    if (err) return res.status(505).json({ error: err.message });
    res.json({ results }); // why no status code
  });
};

exports.getItemById = (req, res) => {
  const id = req.params.id;
  db.query("select * from items where id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message }); // why do i need return here
    if (results === 0) res.status(404).json({ msg: "Item not found" }); // but not here
    res.json(results[0]); // and here
  });
};

exports.createItem = (req, res) => {
  const { name, description } = req.body;
  db.query(
    "insert into items (name, description) values (?, ?)",
    [name, description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, name, description });
    }
  );
};

exports.updateItem = (req, res) => {
  const id = req.params.id; // when this?
  const { name, description } = req.body; // and when this?
  db.query(
    "update items set name = ?, description = ? where id = ?",
    [name, description, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0)
        res.status(404).json({ message: "Item not found" });
      res.json({ message: "item updated" });
    }
  );
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;
  db.query("delete from items where id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  });
};

