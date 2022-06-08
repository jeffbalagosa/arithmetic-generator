const correctAlert = document.getElementById("correct");
const incorrectAlert = document.getElementById("incorrect");
const newProblemButton = document.getElementById("get-new-problem-btn");

const hideAlerts = () => {
  correctAlert.style.display = "none";
  incorrectAlert.style.display = "none";
  newProblemButton.style.display = "none";
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

const problemNumbers = buildAndSortArr(2);

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

const correctAnswer = addOrSubtract(problemNumbers);

// Verify Answer and let user know if they got it correct.
const answerCheck = (num) => {
  const userInput = parseInt(document.getElementById("answer-field").value, 10);

  if (num === userInput) {
    correctAlert.style.display = "block";
    incorrectAlert.style.display = "none";
    newProblemButton.style.display = "block";
  } else if (num != userInput) {
    incorrectAlert.style.display = "block";
    correctAlert.style.display = "none";
  } else {
    console.log("something went wrong");
  }
};

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
