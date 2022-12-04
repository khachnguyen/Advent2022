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

  const object = getObject(round[0]);
  const result = round[1];

  if (result === "X") {
    if (object === "Rock") {
      // Scissors
      score += 3;
    } else if (object === "Paper") {
      // Rock
      score += 1;
    } else if (object === "Scissors") {
      // Paper
      score += 2;
    }
  }
  if (result === "Y") {
    score += 3;
    if (object === "Rock") {
      score += 1;
    } else if (object === "Paper") {
      score += 2;
    } else if (object === "Scissors") {
      score += 3;
    }
  }
  if (result === "Z") {
    score += 6;
    if (object === "Rock") {
      // Paper
      score += 2;
    } else if (object === "Paper") {
      // Scissors
      score += 3;
    } else if (object === "Scissors") {
      // Rock
      score += 1;
    }
  }

  return score;
};

run();
