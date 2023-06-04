function rectangle(width, height, color) {
  const fixedColor = color.charAt(0).toUpperCase() + color.slice(1); // red -> Red ; blue -> Blue, etc...
  const rect = {
    width,
    height,
    color: fixedColor,
    calcArea() {
      return this.width * this.height;
    },
  };
  return rect;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
//4 5 Red 20
