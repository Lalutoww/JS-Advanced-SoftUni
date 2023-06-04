function rotateArray(arr, rotations) {
    let output = [...arr];
    for(let i = 0; i<rotations; i++){
        output.unshift(output.pop());
    }
    return output.join(' ');
}
console.log(rotateArray(["1", "2", "3", "4"], 2));
//3 4 1 2
console.log(rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15));
//Orange Coconut Apple Banana
