function calc() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const output = document.getElementById('sum');
    
    let sum = num1+num2;
    output.value = sum;
}
