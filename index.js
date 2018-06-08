const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
let questionContainer = document.querySelector('.section.question-container')
let question;

function appendQuestion(quest) {
	document.querySelector('.section.question-container').innerHTML = quest.questionText
}

function askQuestionThen(time) {
	question = questions[0]
	appendQuestion(question)
	return new Promise((resolve) => {
	   setTimeout(() => {
	     resolve(question);
	   }, time);
	 });
}

function removeQuestion() {
	questionContainer.innerHTML = ''
	return new Promise((resolve, reject) => {resolve("removed")})
}

function askQuestionThenRemoveQuestion(time) {
	return askQuestionThen(time).then((output)=>{removeQuestion()})
}

function trueAndFalseButtons() {
	return document.querySelectorAll(".lighten-2")
}

function toggleTrueAndFalseButtons() {
	trueAndFalseButtons().forEach((button)=> {
		if (button.classList.contains('hide')) {
			button.classList.remove('hide')
		} else {
			button.classList.add('hide')
		}
		})
}


function displayQuestionOnClick() {
	toggleTrueAndFalseButtons()
	askQuestionThenRemoveQuestion(5000).then(()=>{toggleTrueAndFalseButtons()})
}
