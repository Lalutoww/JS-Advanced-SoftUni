class Stringer {
    constructor(string, lengthLimit) {
        this.innerString = string;
        this.innerLength = lengthLimit;
    }
    increase(value) {
        this.innerLength += value;
    }
    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        }
        if (this.innerLength < this.innerString.length) {
            const outputString = this.innerString.substring(
                0,
                this.innerString.length - this.innerLength
            );
            return `${outputString}...`;
        }
        return this.innerString;
    }
}
let test = new Stringer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
