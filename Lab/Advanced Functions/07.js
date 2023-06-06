function cars(commandArr) {
  const result = {};
  const dict = {
    create(name) {
      result[name] = {};
    },
    createAndInherit(name, parentName) {
      result[name] = Object.create(result[parentName]);
    },
    set(name, key, value) {
      result[name][key] = value;
    },
    print: (n) => {
      const entry = [];
      for (const key in result[n]) {
        entry.push(`${key}:${result[n][key]}`);
      }
      console.log(entry.join(","));
    },
  };
  for (const element of commandArr) {
    if (element.includes("inherit")) {
      let [command, name, inherits1, parentName] = element.split(" ");
      dict["createAndInherit"](name, parentName);
    } else {
      let [command, name, key, value] = element.split(" ");
      dict[command](name, key, value);
    }
  }
}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
