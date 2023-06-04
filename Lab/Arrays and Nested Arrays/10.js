function diagonalSum(arr) {
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reverse();
  }
  for (let i = 0; i < arr.length; i++) {
    secondSum += arr[i][i];
  }
  return firstSum + " " + secondSum;
}

/*function diagonalSums(input) { let firstDiagonal = 0;
    let secondDiagonal = 0; let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++]; 
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal); 
}*/

console.log(
  diagonalSum([
    [3, 5, 17], // 00 11 22 , //02 11 20
    [-1, 7, 14],
    [1, -8, 89],
  ])
);
