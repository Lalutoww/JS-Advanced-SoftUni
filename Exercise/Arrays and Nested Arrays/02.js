function printNthElement(arr, step) {
  let output = [];
  for (let i = 0; i < arr.length; i += step) output.push(arr[i]);
  return output;
}
console.log(printNthElement(["5", "20", "31", "4", "20"], 2));
// ['5', '31','20']
console.log(printNthElement(["dsa", "asd", "test", "tset"], 2));
//['dsa','test']
console.log(printNthElement(["1", "2", "3", "4", "5"], 6));
//['1']
