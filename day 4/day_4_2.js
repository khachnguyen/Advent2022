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
    const dataByLine = data.split("\n");
    let numberPair = 0;

    dataByLine.forEach((pair) => {
      numberPair += isAssignementOverlapping(pair) ? 1 : 0;
    });
    console.log(numberPair);
  });
};

const isAssignementOverlapping = (pair) => {
  if (pair === "") return false;
  const pairSplitted = pair.split(",");
  const elfA = pairSplitted[0].split("-").map((value) => parseInt(value));
  const elfB = pairSplitted[1].split("-").map((value) => parseInt(value));
  return isAOverlapB(elfA, elfB) || isAOverlapB(elfB, elfA);
};

const isAOverlapB = (a, b) => {
  return a[0] <= b[1] && a[0] >= b[0];
};

run();
