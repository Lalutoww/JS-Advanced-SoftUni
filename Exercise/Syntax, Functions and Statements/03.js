function sameNumbers(number){
    let arrNumber = number.toString().split('');
    let areEqual = true;
    for(let i = 0; i<arrNumber.length-1; i++){
        if(arrNumber[i] !== arrNumber[i+1]){
            areEqual = false;
            break;
        }
    }
    console.log(areEqual);
    console.log(arrNumber.map(Number).reduce((acc,val) => acc+val,0));
}
sameNumbers(2222222)
sameNumbers(1234)