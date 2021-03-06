const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;
mongoose
  .connect("mongodb://localhost:27017/testing", { useNewUrlParser: true })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));
const filmovi = require("./routes/filmovi");
const serije = require("./routes/serije");
const glumci = require("./routes/glumci");

app.use("/api/v1/filmovi", filmovi);
app.use("/api/v1/serije", serije);
app.use("/api/v1/glumci", glumci);

app.listen(port, () => console.log("Server is listening on port 3000"));
