const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const authRoutes = require("./routes/auth");
const app = express();
require("dotenv").config();

app.use(function (req, res, next) {
  req.headers['content-type'] = 'application/json';
  next();
});

const corsOptions={
  origin:"*",
}

app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);


