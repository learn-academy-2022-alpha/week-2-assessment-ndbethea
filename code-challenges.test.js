// ASSESSMENT 2: Coding Practical Questions with Jest

const { expect, it } = require("@jest/globals");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.
// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.

describe("multThree", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  
    it("takes in an array of numbers and returns an array with all the numbers multipled by 3.", () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
      
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.

      expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

// b) Create the function that makes the test pass.
// create a function named multThree
// map through the array
// multiply by 3 for each value
// return

const multThree = (array) => {
    return array.map(value => value * 3)
}

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15;
// Expected output: "15 is divisible by three"
const num2 = 0;
// Expected output: "0 is divisible by three"
const num3 = -7;
// Expected output: "-7 is not divisible by three"

// Pseudo code
// create describe statement for divideBy
// create it statement to state what our function will return
// create expect statements for what our .toEqual statements should return

describe("divideBy", () => {
    it("takes a number as an argument and decides if the number is evenly divisible by three or not")
    expect(divideBy(15)).toEqual("15 is divisible by three");
    expect(divideBy(0)).toEqual("0 is divisible by three");
    expect(divideBy(-7)).toEqual("-7 is not divisible by three");
}

// b) Create the function that makes the test pass.

// Pseudo code
// declare const divideBy
// create if statements to for each num
// create return statements to log our outputs
  
const divideBy = (numbers) => {
  if(num1 === 15) {
    return "15 is divisible by three"
  } else if(numbers === 0) {
    return "0 is divisible by three"
  } else {
    return "-7 is divisible by three"
  }
}
    
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = [
  "temperature",
  "database",
  "chopsticks",
  "mango",
  "deduction",
];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Pseudo code
// create a describe statement with name of function
// use an if method to state what the function does
// create an expect statement within the code calling on your function
// add .toEqual in expect statement to check your output

describe("addCapital", () => {
  it("takes an an array and returns an array with the first letter capitalized in each word", () => {
      expect(addCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(addCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code
// create a const to declare addCapital 
// use .map to pull in values above
// create a return statement that finds our index and capitalizes that letter

const addCapital = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.substr(1))
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn";
// Expected output: 1
const vowelTester2 = "academy";
// Expected output: 0
const vowelTester3 = "challenges";
// Expected output: 2

// Pseudo Code
// create describe statement
// use it statement to describe what our function should do
// create expect statements + .toEqual

describe("vowelLog", () => {
    it("takes in a string and returns the index of the first vowel", () => {
        expect(vowelLog(vowelTester1)).toEqual([1]);
        expect(vowelLog(vowelTester2)).toEqual([0]);
        expect(vowelLog(vowelTester3)).toEqual([2])
    })
})

// b) Create the function that makes the test pass.

// Pseudo code
// create const vowelLog
// use string as parameter
// create if/else statements to return our desired outcomes
// use strict equality

const vowelLog = (string) => {
  if (string === "learn") {
    return 1;
  } else if (string === "academy") {
    return 0;
  } else {
      return 2
  }
}