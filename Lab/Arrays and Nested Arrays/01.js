function evenPosition(arr) {
  let buff = "";
  arr.forEach((element, index) => {
    if (index % 2 === 0) buff += element + " ";
  });
  return buff;
}
console.log(evenPosition(["20", "30", "40", "50", "60"]));
//20 40 60
console.log(" ");
console.log(evenPosition(["5", "10"]));
//5
