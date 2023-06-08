function add(num) {
    let sum = num;

    function calc(anotherNum) {
        sum += anotherNum;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}
console.log(add(1)(2).toString())
