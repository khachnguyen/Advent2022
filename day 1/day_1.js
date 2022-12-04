const fs = require("fs");

const run = () => {
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const elfList = data.split("\n");
    let highestCalories = 0;
    let currentCalories = 0;

    elfList.forEach((value) => {
      if (value.length === 1) {
        if (currentCalories > highestCalories) {
          highestCalories = currentCalories;
        }
        currentCalories = 0;
      } else {
        currentCalories += parseInt(value);
      }
    });
    console.log(highestCalories);
  });
};

run();
