const questions = [
  { questionText: 'Lightning never strikes in the same place twice', answer: false },
  { questionText: 'Humans can distinguish between over one trillion different smells', answer: true },
  { questionText: 'Goldfish only have a memory of about three seconds', answer: false },
];

let question;
const qContainer = document.querySelector('.question-container');

function appendQuestion(question) {
  qContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(question);
    }, time);
  });
}

function removeQuestion() {
  qContainer.innerHTML = '';
  toggleTrueAndFalseButtons();
}

function trueAndFalseButtons() {
  const buttons = document.querySelectorAll('div.btn');
  buttons.forEach((button) => {
    const newText = button.innerText.toUpperCase().replace(/\s+/g, '');
    button.innerText = newText;
  });
  return buttons;
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach((button) => {
    button.classList.toggle('hide');
  });
}


function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function displayQuestionOnClick() {
  const askButton = document.querySelector('a.waves-effect');
  askButton.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(10000);
  });
}
