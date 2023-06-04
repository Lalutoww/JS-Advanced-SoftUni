function stringLength(firstString,secondString,thirdString){
    let sum = firstString.length + secondString.length + thirdString.length;
    let avg = Math.floor(sum / 3);
    console.log(sum);
    console.log(avg);

}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')