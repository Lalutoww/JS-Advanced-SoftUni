function sum(start,end){
    let sum = 0;
    for(let i = Number(start); i<=Number(end);i++){
        sum+=i;
    }
    return sum;
}
console.log(sum('1','5'));
console.log(sum('-8','20'));