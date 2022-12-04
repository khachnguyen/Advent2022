const fs = require("fs");

/*
A,X ==> Pierre ==> 1
B,Y ==> Papier ==> 2
C,Z ==> Ciseaux ==> 3

*/

const run = () => {
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const input = data.split("\n");
    let prioritySum = 0;
    input.forEach((rucksack) => {
      const item = getItemInRuscksack(rucksack);
      prioritySum += getPriority(item);
    });

    console.log(prioritySum);
  });
};

const getItemInRuscksack = (rucksack) => {
  rucksack = rucksack.trim();
  const RUCKSACK_1STCOMPART = rucksack.slice(0, rucksack.length / 2);
  const RUCKSACK_2STCOMPART = rucksack.slice(
    rucksack.length / 2,
    rucksack.length
  );
  for (let index = 0; index < RUCKSACK_1STCOMPART.length; index++) {
    if (RUCKSACK_2STCOMPART.includes(RUCKSACK_1STCOMPART[index]))
      return RUCKSACK_1STCOMPART[index];
  }
};

const getPriority = (letter) => {
  if (letter === undefined) return 0;

  if (letter == letter.toLowerCase()) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 38;
  }
};

run();
