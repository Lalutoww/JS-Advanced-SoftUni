function solve(area, vol, input) {
    const objArr = JSON.parse(input);
    let output = [];
    
    for (const obj of objArr) {
        const areaValue = area.call(obj);
        const volume = vol.call(obj);

        output.push({area: areaValue,volume});
    }
    return output;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.table(solve(
  area,
  vol,
  `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`
));
