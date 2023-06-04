function increasingSubset(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  const output = arr.reduce((acc, curr) => {
    if (curr >= max) {
      max = curr;
      acc.push(curr);
      return acc;
    }

    return acc;
  }, []);
  return output;
}
console.log(increasingSubset([1, 2, 3, 4]));
console.log(increasingSubset([20, 3, 2, 15, 6, 1]));
//[20];
