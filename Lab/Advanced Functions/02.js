function solution(partialNumber){
    return function(numberToAdd){
        return partialNumber + numberToAdd;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));