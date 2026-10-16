const questions = [
  {
    category: "aaa",
    question: "Favorite fast-food meal ?",
    choices: ["Steak", "Burger", "Fish-n-Chips"],
    answer: "Burger",
  },
  {
    category: "aaa",
    question: "Preferred car brand ?",
    choices: ["Honda", "Volkswagon", "Toyota"],
    answer: "Toyota",
  },
  {
    category: "aaa",
    question: "Favorite color ?",
    choices: ["Blue", "Black", "Brown"],
    answer: "Black",
  },
  {
    category: "aaa",
    question: "Preferred tech skill ?",
    choices: ["Systems Administration", "Networking", "Programming"],
    answer: "Programming",
  },
  {
    category: "aaa",
    question: "Preferred time of day ?",
    choices: ["Dawn", "Dusk", "Noon"],
    answer: "Dusk",
  },
];

function getRandomQuestion(questions) {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

let randomQuestion = getRandomQuestion(questions);

function getRandomComputerChoice(choices) {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

let computerChoice = getRandomComputerChoice(randomQuestion.choices);

function getResults(randomQuestion, computerChoice) {
  console.log(`Random question: ${randomQuestion.question}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Correct answer: ${randomQuestion.answer}`);

  if (computerChoice === randomQuestion.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
  }
}

// Test Case
let result = getResults(randomQuestion, computerChoice);
console.log(result);
