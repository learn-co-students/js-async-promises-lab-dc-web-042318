const questions = [
  {
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText:
      "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
];

const questionContainer = document.querySelector(".question-container");

let question;

function trueAndFalseButtons() {
  return document.querySelector(".true-false-list").querySelectorAll(".btn");
}

function appendQuestion(question) {
  questionContainer.innerText = question["questionText"];
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(question);
    }, time);
  });
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    questionContainer.innerText = "";
  });
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function displayQuestionOnClick() {
  let btn = document.querySelector("a");
  return btn.addEventListener("click", () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  });
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn) {
    btn.classList.toggle("hide");
  });
}
