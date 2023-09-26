const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 
  let candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
  
  let candidateResponse= input.question(questions[i]);
  candidateAnswers.push(candidateResponse);
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
candidateAnswers.join("")
 if (correctAnswer === candidateAnswer){
  console.log(`Correct! You entered ${candidateAnswer}`);
 } else{
  console.log(`Incorrect. You entered ${candidateAnswer} but the correct anwer is ${correctAnswer}.`);
 }

let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  
//converting for case insensativity

 let tmpStr = correctAnswers.join(",").toLowerCase();
correctAnswers = tmpStr.split(",");
 let secondTmpStr = candidateAnswers.join(",").toLowerCase();
candidateAnswers = secondTmpStr.split(",");
 
// Loop to validate answers
  for (let i=0; i < correctAnswers.length; i++){
  
  if (candidateAnswers[i] === correctAnswers[i]){
    grade = grade + 1;
  }else {
    grade = grade + 0; 
  console.log(grade / 5 * 100)
  }
  }

// Totaling score  
   grade = (grade / 5) * 100;
  if (grade > 80){
    console.log(`Congratulations you have passed with a score of ${grade}%!`);
  } else{
    console.log(`You have scored ${grade}%, but you must score 80% or better to pass.`);
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello" + candidateName + "! It is nice to meet you.");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};