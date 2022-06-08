const correctAlert = document.getElementById("correct");
const incorrectAlert = document.getElementById("incorrect");
const newProblemButton = document.getElementById("get-new-problem-btn");
const streakCountDisplay = document.getElementById("streak-count");

const hideAlerts = () => {
  correctAlert.style.display = "none";
  incorrectAlert.style.display = "none";
  newProblemButton.style.display = "none";
  document.getElementById("answer-field").value = "";
};

hideAlerts();

// build array & sort array
const buildAndSortArr = (preferredArrLength) => {
  let arr = [];
  let newArr = [];
  for (let i = 0; i < preferredArrLength; i++) {
    let num = chance.integer({ min: 0, max: 99 });
    arr.push(num);
  }

  if (arr[1] > arr[0]) {
    newArr.push(arr[1]);
    newArr.push(arr[0]);
    return newArr;
  } else {
    return arr;
  }
};

let problemNumbers = buildAndSortArr(2);

const addOrSubtract = (arr) => {
  const firstNum = arr[0];
  const secondNum = arr[1];

  const minus = firstNum - secondNum;
  let plus = firstNum + secondNum;

  // decide if add or subtract
  const result = chance.pickone([plus, minus]);

  // post problem on index.html
  if (result === plus) {
    document.getElementById(
      "problem"
    ).innerHTML = `${firstNum} + ${secondNum} = ?`;
  } else {
    document.getElementById(
      "problem"
    ).innerHTML = `${firstNum} - ${secondNum} = ?`;
  }
  // return answer
  return result;
};

let correctAnswer = addOrSubtract(problemNumbers);

// Verify Answer and let user know if they got it correct.
const answerCheck = (num) => {
  const userInput = parseInt(document.getElementById("answer-field").value, 10);

  if (num === userInput) {
    correctAlert.style.display = "block";
    incorrectAlert.style.display = "none";
    newProblemButton.style.display = "block";
    streakCountDisplay.innerHTML = `Streak = ${streakCounter(correct)}`;
  } else if (num != userInput) {
    incorrectAlert.style.display = "block";
    correctAlert.style.display = "none";
    streakCountDisplay.innerHTML = `Streak = ${streakCounter()}`;
  } else {
    console.log("something went wrong");
  }
};

// Count correct answers streak
let count = 0;
const streakCounter = (toggle) => {
  switch (toggle) {
    case correct:
      count += 1;
      break;

    default:
      count = 0;
  }
  return count;
};

// Event listeners
const submitButton = document.getElementById("submit-button");
submitButton.onclick = function () {
  answerCheck(correctAnswer);
};

const answerField = document.getElementById("answer-field");
answerField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

// If newProblemButton is clicked it will generage a new problem and set display back to none for newProblemButton and correct/incorrect alerts.
newProblemButton.onclick = function () {
  problemNumbers = buildAndSortArr(2);
  correctAnswer = addOrSubtract(problemNumbers);
  hideAlerts();
  document.getElementById("answer-field").value = "";
};
