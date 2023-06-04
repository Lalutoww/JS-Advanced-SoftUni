function biggestElement(arr){
    let max = Number.MIN_SAFE_INTEGER;

    for (const array of arr) {
        for (const number of array) {
            if(number > max) max = number;
        }
    }
return max;
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));