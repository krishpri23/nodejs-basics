const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

// works as waterfall so this will run first then app.get()

// custom middleware

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} custom`);
  next();
});

// built-in middleware for handling form data
app.use(express.urlencoded({ extended: false }));

// handling json data
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, "./public")));

// added router for this route
app.use("/subdir", require("./routes/subdir"));
app.use("/employees", require("./routes/api/employees"));

// app.get("^/$|/index(.html)?", (req, res) => {
//   //   Current Directory: Suppose your script is located in /home/user/project/server.js.
//   // __dirname: The value of __dirname would be /home/user/project.
//   //  Express resolves the relative path ./views/index.html from the root directory /home/user/project, resulting in the absolute path /home/user/project/views/index.html.
//   //res.sendFile("./views/index.html", { root: __dirname });
//   //res.sendFile('./views/index.html', { root: __dirname });
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
});

// Route handlers - middleware
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello World!");
  }
);

// chaining route handlers
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
