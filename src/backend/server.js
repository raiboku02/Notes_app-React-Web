import express from "express";
import mysql from "mysql";
import cors from 'cors'

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "notes",
});

//this allows the user to send request to client VERY IMPORTANT
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});

app.get("/notes", (req, res) => {
  const q = "SELECT * FROM notes.note_list";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/notes", (req, res) => {
  const q = "INSERT INTO notes.note_list (`note`) VALUE (?)";
  const values = [req.body.note];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Note has been created Successfully");
    }
  });
});

app.listen(8808, () => {
  console.log("Connected to backend");
});
