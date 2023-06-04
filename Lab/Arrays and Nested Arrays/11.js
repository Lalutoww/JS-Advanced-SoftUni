function equalNeighbors(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let currentArr = arr[i];
    let nextArr = arr[i + 1];
    for (let j = 1; j < currentArr.length; j++) {
      let currentElement = currentArr[j];
      let nextElement = currentArr[j - 1];
      if (currentArr[j] === nextArr[j]) counter++;
      if (currentElement === nextElement) counter++;
    }
  }
  for (let index = 0; index < arr[arr.length - 1].length; index++) {
    if (arr[arr.length - 1][index] == arr[arr.length - 1][index + 1]) {
      counter++;
    }
  }
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index][0] == arr[index + 1][0]) {
      counter++;
    }
  }

  console.log(counter);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
equalNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
