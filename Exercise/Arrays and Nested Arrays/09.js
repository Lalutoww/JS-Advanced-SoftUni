function magicMatrices(arr){
    const sum = arr[0].reduce((acc,val) => acc+val,0);

    for(let row = 0; row<arr.length; row++){
        let rowSum = 0;
        let colSum = 0;
        for(let col = 0; col<arr.length; col++){
            rowSum+= arr[row][col];
            colSum+= arr[col][row];           
        }
        if(sum !== rowSum || sum !== colSum){
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
//true
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
//false