function biggerHalf(arr){
    arr = arr.sort((a,b) => a-b);
    let half = Math.floor(arr.length / 2);
    return arr.slice(half);
}
console.log(biggerHalf([4, 7, 2, 5]));
//[5, 7]
console.log(' ');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//[7, 14, 19, 19]