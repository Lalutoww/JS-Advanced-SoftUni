function listProcessor(commandArr) {
  let result = [];
  const dict = {
    add(str) {
      return result.push(str);
    },
    remove(str) {
      let finder = result.indexOf(str);
      while (finder !== -1) {
        result.splice(finder, 1);
        finder = result.indexOf(str);
      }
      return result;
    },
    print() {
      console.log(result.join(","));
    },
  };
  for (const element of commandArr) {
    let [command, str] = element.split(" ");
    dict[command](str);
  }
}
listProcessor(["add hello", "add hello", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
