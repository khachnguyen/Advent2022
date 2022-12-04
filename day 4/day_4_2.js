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

    console.log(isAssignementOverlapping("2-4,6-8"));
    console.log(isAssignementOverlapping("2-3,4-5"));

    console.log(isAssignementOverlapping("5-7,7-9"));
    console.log(isAssignementOverlapping("2-8,3-7"));
    console.log(isAssignementOverlapping("6-6,4-6"));
    console.log(isAssignementOverlapping("2-6,4-8"));

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
