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
    let score = 0;
    input.forEach((round) => {
      const roundTrimmed = round.replace(/\s/g, "");
      score += getResultMatch(roundTrimmed);
    });

    console.log(score);
  });
};

const getObject = (string) => {
  switch (string.toUpperCase()) {
    case "A":
      return "Rock";
    case "X":
      return "Rock";
    case "B":
      return "Paper";
    case "Y":
      return "Paper";
    case "C":
      return "Scissors";
    case "Z":
      return "Scissors";
  }
};

const getResultMatch = (round) => {
  let score = 0;
  if (round.length < 1) {
    return 0;
  }

  const objectA = getObject(round[0]);
  const objectB = getObject(round[1]);

  if (objectB == "Rock") {
    score += 1;
    if (objectA === "Scissors") {
      score += 6;
    }
    if (objectA === "Rock") {
      score += 3;
    }
  } else if (objectB == "Paper") {
    score += 2;
    if (objectA === "Rock") {
      score += 6;
    }
    if (objectA === "Paper") {
      score += 3;
    }
  } else if (objectB == "Scissors") {
    score += 3;
    if (objectA === "Paper") {
      score += 6;
    }
    if (objectA === "Scissors") {
      score += 3;
    }
  }

  return score;
};

run();
