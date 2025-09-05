const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const indexRouter = require("./routes/index")
const compression = require("compression")
const { db } = require("./db/connect");
const multer = require("multer");
const fileDelete = require("./middleware/utils/fileDelate");
app = express();

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.removeHeader("Server");
  next();
});

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOK_KEY));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(
  compression({
    threshold: 600,
    level: 5,
  })
);
// app.use(
//   rateLimit({
//     windowMs: 60 * 1000,
//     limit: 50,
//     message: "your limit end, please try again 1 minute",
//   })
// );
app.use(
  "/productimg",
  express.static(path.join(__dirname, "media", "product", "images"), {
    setHeaders: (res) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    }
  })
);
app.use("/images", express.static(path.join(__dirname, "media", "home", "images"), {
  setHeaders: (res) => {
    res.set("Cross-Origin-Resource-Policy", "cross-origin");
  }
})
);
app.use("/videos", express.static(path.join(__dirname, "media", "home", "videos"), {
  setHeaders: (res) => {
    res.set("Cross-Origin-Resource-Policy", "cross-origin");
  }
})
);
app.use("/productvideo", express.static(path.join(__dirname, "media", "product", "videos"), {
  setHeaders: (res) => {
    res.set("Cross-Origin-Resource-Policy", "cross-origin");
  }
})
);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

  if (err instanceof multer.MulterError) {
    if (req.originalUrl.includes("product")) {
      if (Array.isArray(req.body?.files) && req.body.files.length > 0) {
        fileDelete(req.body.files);
      }

      if (req.body.variant.length) {
        const variantFiles = req.body.variant
          .map(item => item.file)

        if (variantFiles.length > 0) {
          fileDelete(variantFiles);
        }
      }
    }
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.json({ error: err?.message ?? err });
});

module.exports = app;
