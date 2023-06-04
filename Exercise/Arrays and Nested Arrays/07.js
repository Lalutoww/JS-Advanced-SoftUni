function sortNumbers(arr){
    let output = [];
    arr = arr.sort((a,b) => a-b);
    while(arr.length > 0){
        let smallestElement = arr.shift();
        let biggestelement = arr.pop();
        output.push(smallestElement,biggestelement)
    }
    return output;
}
console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]