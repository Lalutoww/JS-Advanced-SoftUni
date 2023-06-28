class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid input');
        }
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const p1 = new Person('Ivan', 'Dimitrov');
console.log(p1.fullName);
(p1.fullName = 'Stoqn Kolev');
console.log(p1.fullName);
