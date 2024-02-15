const fs = require("fs");

const str = "Hie this is rupam";

fs.writeFile("a.txt", str, (err) => {
  console.log("Written Successfully");
});
