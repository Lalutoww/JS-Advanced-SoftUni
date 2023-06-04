function jansNotation(arr) {
  const dictionary = {
    "+"(a, b) {
      return a + b;
    },
    "-"(a, b) {
      return b - a;
    },
    "*"(a, b) {
      return a * b;
    },
    "/"(a, b) {
      return b / a;
    },
  };
  let clonedArr = [...arr];
  let numbers = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length) {
      if (numbers.length === 1) {
        return numbers[0];
      }
      return "Error: too many operands!";
    }
    if (typeof clonedArr[i] === "number") {
      numbers.push(clonedArr[i]);
    } else {
      const operand = clonedArr[i];

      if (numbers.length < 2) {
        return "Error: not enough operands!";
      }
      const numbA = numbers.pop();
      const numbB = numbers.pop();
      const result = dictionary[operand](numbA, numbB);
      numbers.push(result);
    }
  }
}
console.log(jansNotation([3, 4, "+"]));
// 7
console.log(jansNotation([5, 3, 4, "*", "-"]));
// -7
