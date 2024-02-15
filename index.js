const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  const updatedArr = [];

  data.split("").forEach((el) => {
    if (updatedArr[updatedArr.length - 1] === " " && el === " ") {
      return;
    } else {
      updatedArr.push(el);
    }
  });

  // console.log(updatedArr.join(""));

  fs.writeFile("a.txt", updatedArr.join(""), (err) => {
    console.log("done");
  });
});
