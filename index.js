const fs = require("fs");

fs.readFile("./files/started.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
