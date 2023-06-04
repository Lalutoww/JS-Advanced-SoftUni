function lastKelements(n,k){
    let arr = [1];
for(let i = 1; i<n; i++){
    let remove = i > k ? k : i;
    let lastKelements = arr.slice(i-remove,i);
    let numberToPush = lastKelements.reduce((acc,val) => acc+val,0);
    arr.push(numberToPush);
}
return arr;
}
console.log(lastKelements(6, 3));
//[1, 1, 2, 4, 7, 13]
console.log(' ');
console.log(lastKelements(8, 2));
//[1, 1, 2, 3, 5, 8, 13, 21]