function solution() {
  let string = "";
  return {
    append(str) {
      return string+=str;
    },
    removeStart(n) {
      return (string = string.substring(n));
    },
    removeEnd(n) {
      return (string = string.substring(0, string.length - n));
    },
    print() {
      console.log(string);
    },
  };
}
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
