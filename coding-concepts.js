// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022";
console.log(cohort.split(""));

// a) Your answer: ['A', 'L', 'P', 'H', 'A', ' ', '2', '0', '2', '2']
// b) Verify and explain: The use of .split when console logging will return an array separated individually by character

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
console.log(greeter("LEARN Student"));

// a) Your answer: Undefined
// b) Verify and explain: Undefined because there is no "return" in front of line 19 giving the code instructions to return "Hello, LEARN Student!"

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map((value) => value * 2);
console.log(multBy2);

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The use of ".map" pulls in the the var multby2, while as the function and use of "value * 2" takes the numbers from our original array and multiples them by 2.

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter((value) => value % 2 !== 0);
console.log(onlyOdds);

// a) Your answer: [11, 13, 15]
// b) Verify and explain: the use of ".filter" allows us to call a function in which we are able to return specific values where in this class are only the odd numbers of our original array.

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
console.log(myCodingSkills.languages[0]);

// a) Your answer: JavaScript
// b) Verify and explain: The use of ".languages[0]" within the console log calls on "languages: ["JavaScript", "Ruby"]", and more specifically the use of [0] calls on the value in the zero position which in this case is JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Alpha"), (this.year = 2022);
  }
}
var learnStudent = new Learn("George");
console.log(learnStudent);

// a) Your answer: George, Alpha, 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Alpha', year: 2022 }, the use of the new learnStudent variable adds the name george to the above class Learn, and when logged it returns the data of class Learn.
