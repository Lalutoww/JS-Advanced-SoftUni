const carService = require('../03. Car Service/03. Car Service');
const expect = require('chai').expect;

describe('CAR SERVICE FUNCTION TESTS', function () {
    describe('IS IT EXPENSIVE METHOD TESTS', function () {
        it('Should display correct message with correct input', function () {
            const result = carService.isItExpensive('Engine');
            const result2 = carService.isItExpensive('Transmission');
            const result3 = carService.isItExpensive('anythingElse');
            expect(result).to.eql(
                'The issue with the car is more severe and it will cost more money'
            );
            expect(result2).to.eql(
                'The issue with the car is more severe and it will cost more money'
            );
            expect(result3).to.eql('The overall price will be a bit cheaper');
        });
    });
    describe('DISCOUNT METHOD TESTS', function () {
        it('Should throw an Error if the input is invalid', function () {
            const result1 = () => carService.discount('1', 100);
            const result2 = () => carService.discount(2, '100');

            expect(result1).to.throw(Error, 'Invalid input');
            expect(result2).to.throw(Error, 'Invalid input');
        });

        it('Should display correct discount based on number of parts', function () {
            const result1 = carService.discount(1, 100);
            const result2 = carService.discount(2, 100);
            const result3 = carService.discount(3, 100);
            const result4 = carService.discount(7, 100);
            const result5 = carService.discount(8, 100);

            expect(result1).to.eql('You cannot apply a discount');
            expect(result2).to.eql('You cannot apply a discount');
            expect(result3).to.eql(`Discount applied! You saved 15$`);
            expect(result4).to.eql(`Discount applied! You saved 15$`);
            expect(result5).to.eql(`Discount applied! You saved 30$`);
        });
    });
    describe('PARTS TO BUY METHOD TESTS', function () {
        it('Should throw an error if the input is invalid', function () {
            const result1 = () => carService.partsToBuy([], 'not-an-array');
            const result2 = () => carService.partsToBuy('not-an-array', []);

            expect(result1).to.throw(Error, 'Invalid input');
            expect(result2).to.throw(Error, 'Invalid input');
        });
        it('Should store the parts and the price for them', function () {
            const result1 = carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 145 },
                    { part: 'injection', price: 120 },
                ],
                ['blowoff valve', 'injectors']
            );
            const result2 = carService.partsToBuy(
                [],
                ['blowoff valve', 'injectors']
            );
            const result3 = carService.partsToBuy([], []);
            const result4 = carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 145 },
                    { part: 'injectors', price: 120 },
                ],
                ['blowoff valve', 'injectors']
            );
            expect(result1).to.eql(145);
            expect(result2).to.eql(0);
            expect(result3).to.eql(0);
            expect(result4).to.eql(265);
        });
    });
});
