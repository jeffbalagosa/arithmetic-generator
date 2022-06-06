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

// decide if add or subtract
// post problem on index.html
// return answer
const addOrSubtract = (arr) => {
  const firstNum = arr[0];
  const secondNum = arr[1];

  const minus = firstNum - secondNum;
  let plus = firstNum + secondNum;

  const result = chance.pickone([plus, minus]);

  if (result === plus) {
    document.getElementById(
      "problem"
    ).innerHTML = `${firstNum} + ${secondNum} = ?`;
  } else {
    document.getElementById(
      "problem"
    ).innerHTML = `${firstNum} - ${secondNum} = ?`;
  }

  return result;
};

const problemNumbers = buildAndSortArr(2);
const answer = addOrSubtract(problemNumbers);
console.log(`Answer: ${answer}`);
