function largestNumber(...numbers){
    let max = Number.MIN_SAFE_INTEGER;
    for (const number of numbers) {
        if(number > max) max = number;
    }
    console.log('The largest number is ' + max + '.');
}
largestNumber(5,-3,16)
largestNumber(-3,-5,-22.5)