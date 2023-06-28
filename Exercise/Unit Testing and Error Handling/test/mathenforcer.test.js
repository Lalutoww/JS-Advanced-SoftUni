const expect = require('chai').expect;
const mathEnforcer = require('../04-mathenforcer');

describe('MATH ENFORCER FUNCTION', function () {
    describe('ADD FIVE METHOD', function () {
        it('Returns undefined if the parameter is not a number', function () {
            const num = 'test';
            const result = mathEnforcer.addFive(num);
            expect(result).to.be.undefined;
        });
        it('Returns number+5 if the parameter is a number', function () {
            const num = 1;
            const result = mathEnforcer.addFive(num);
            expect(result).to.eq(6);
        });
        it('Returns number+5 if the parameter is a negative number', function () {
            const num = -6;
            const result = mathEnforcer.addFive(num);
            expect(result).to.eq(-1);
        });
        it('Returns number+5 if the parameter is a decimal number', function () {
            const num = 1.3;
            const result = mathEnforcer.addFive(num);
            expect(result).to.closeTo(6.3, 0.01);
        });
    });
    describe('SUBTRACT TEN METHOD', function () {
        it('Returns undefined if the parameter is not a number', function () {
            const num = 'test';
            const result = mathEnforcer.subtractTen(num);
            expect(result).to.be.undefined;
        });
        it('Returns number-10 if the parameter is a number', function () {
            const num = 11;
            const result = mathEnforcer.subtractTen(num);
            expect(result).to.eq(1);
        });
        it('Returns number-10 if the parameter is a negative number', function () {
            const num = -1;
            const result = mathEnforcer.subtractTen(num);
            expect(result).to.eq(-11);
        });
        it('Returns number-10 if the parameter is a decimal number', function () {
            const num = 11.3;
            const result = mathEnforcer.subtractTen(num);
            expect(result).to.closeTo(1.3, 0.01);
        });
    });
    describe('SUM METHOD', function () {
        it('Returns undefined if the first parameter is not a number', function () {
            const num = 'test';
            const num2 = 1;
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.be.undefined;
        });
        it('Returns undefined if the second parameter is not a number', function () {
            const num = 1;
            const num2 = 'test';
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.be.undefined;
        });
        it('Returns undefined if both parameters are not numbers', function () {
            const num = 'test';
            const num2 = 'test';
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.be.undefined;
        });
        it('Returns sum if both parameters are numbers', function () {
            const num = 1;
            const num2 = 4;
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.eq(5);
        });
        it('Returns sum if both parameters are negative numbers', function () {
            const num = -1;
            const num2 = -4;
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.eq(-5);
        });
        it('Returns sum if both parameters are decimal numbers', function () {
            const num = 1.2;
            const num2 = 4.3;
            const result = mathEnforcer.sum(num, num2);
            expect(result).to.closeTo(5.5, 0.01);
        });
    });
});
