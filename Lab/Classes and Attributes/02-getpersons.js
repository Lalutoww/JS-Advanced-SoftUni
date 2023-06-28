function personArrays(){
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni', undefined,undefined,undefined);
    let person3 = new Person('Stephan','Johnson',25,undefined);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    return [person,person2,person3,person4]
}
console.log(personArrays());