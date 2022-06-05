let problem = document.getElementById("problem");
let numArr = [];
const plusOrMinusArr = ["+", "-"];

const numArrBuilder = (arrLength) => {
  for (let i = 0; i < arrLength; i++) {
    let num = chance.integer({ min: 0, max: 99 });
    numArr.push(num);
  }
  return numArr;
};

numArrBuilder(2);

if (numArr[1] > numArr[0]) {
  const largeNum = numArr[1];
  const smallNum = numArr[0];
} else {
  const largeNum = numArr[0];
  const smallNum = numArr[1];
}

problem.innerHTML = `${largeNum} + ${smallNum} = ?`;
