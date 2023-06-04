function processOddNumbers(arr){
    let output = [];
    for(let i = 0; i<arr.length; i++){
        if(i%2 !== 0) output.push(arr[i])
    }
    output = output.reverse().map(x=>x*2);
    return output.join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]));
//50 30
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
//6 8 0