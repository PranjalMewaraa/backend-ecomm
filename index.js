const dotenv = require("dotenv").config();
let config = dotenv.parsed;
const express = require("express");
const loadRoutes = require("./routes");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
let corsOptions = {
  origin: function (origin, callback) {
    console.log(whitelist.indexOf(origin));
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "upload")));
app.use("/api/upload/", express.static(path.join(__dirname, "upload")));
app.use(
  "/upload/videos/",
  express.static(path.join(__dirname, "upload/videos"))
);

app.use(loadRoutes);
// app.use(cookieParser());

const PORT = process.env.PORT || config.PORT;
const HOST = process.env.HOST || config.HOST;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, HOST, async () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
