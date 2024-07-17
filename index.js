// core modules

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

fs.readFile("./files/started.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "This is a reply",
  (err) => {
    if (err) throw err;
    console.log("write complete");
  }
);

// A better approach of the previous code is to use async await to read/write/append files
