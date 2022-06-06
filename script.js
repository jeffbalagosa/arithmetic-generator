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

console.log(buildAndSortArr(2));
