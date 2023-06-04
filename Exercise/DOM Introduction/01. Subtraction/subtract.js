function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    let subtraction = firstNumber - secondNumber;
    document.getElementById('result').textContent = subtraction;
}