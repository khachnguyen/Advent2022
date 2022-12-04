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

    for (let i = 0; i < input.length; i++) {
      if (i % 3 === 0 && i < input.length - 3) {
        const item = getItemInCommon([input[i], input[i + 1], input[i + 2]]);
        prioritySum += getPriorityNumber(item);
      }
    }

    console.log(prioritySum);
  });
};

const getItemInCommon = (elfGroup) => {
  const _elfA = elfGroup[0].trim();
  const _elfB = elfGroup[1].trim();
  const _elfC = elfGroup[2].trim();

  for (let index = 0; index < _elfA.length; index++) {
    if (_elfB.includes(_elfA[index]) && _elfC.includes(_elfA[index]))
      return _elfA[index];
  }
};

const getPriorityNumber = (letter) => {
  if (letter === undefined) return 0;

  if (letter == letter.toLowerCase()) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 38;
  }
};

run();
