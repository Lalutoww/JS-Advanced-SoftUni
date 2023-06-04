function mathOperations(numberOne,numberTwo, operation){
    switch(operation){
        case '+': return numberOne + numberTwo;
        case '-': return numberOne - numberTwo;
        case '*': return numberOne * numberTwo;
        case '/': return numberOne / numberTwo;
        case '%': return numberOne % numberTwo;
        case '**': return numberOne ** numberTwo;   
    }
}
console.log(mathOperations(5,6,'+'));
console.log(mathOperations(3,5.5,'*'));