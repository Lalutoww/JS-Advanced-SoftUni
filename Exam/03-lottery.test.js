const expect = require('chai').expect;
const lottery = require('../Exam/03-lottery');

describe('LOTTERY OBJECT TESTS', function () {
    describe('BUY LOTTERY METHOD FUNCTION TESTS', function () {
        it('Should throw an error if any of the inputs is invalid', function () {
            const result1 = () => lottery.buyLotteryTicket('10', 20, true);
            const result2 = () => lottery.buyLotteryTicket(20, '10', true);
            const result3 = () => lottery.buyLotteryTicket(10, 20, 30);
            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
            expect(result3).to.throw(Error, 'Invalid input!');
        });
        it('Should throw an error if buy === false', function () {
            const result1 = () => lottery.buyLotteryTicket(10, 20, false);
            expect(result1).to.throw(Error, 'Unable to buy lottery ticket!');
        });
        it('Should work only if it meets the requirements', function () {
            const result1 = lottery.buyLotteryTicket(1, 2, true);
            const result2 = lottery.buyLotteryTicket(1, 1, true);
            const result3 = lottery.buyLotteryTicket(8, 9, true);
            expect(result1).to.eql('You bought 2 tickets for 2$.')
            expect(result2).to.eql('You bought 1 tickets for 1$.')
            expect(result3).to.eql('You bought 9 tickets for 72$.')
        });
    });
    describe('CHECK TICKET METHOD TESTS', function (){
        it('Should throw an error if any of the inputs is invalid', function () {
            const result1 = () => lottery.checkTicket([], 20);
            const result2 = () => lottery.checkTicket('14', []);
            const result3 = () => lottery.checkTicket([1,2,3,4,5], [1,2,3,4,5,6]);
            const result4 = () => lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5]);
            const result5 = () => lottery.checkTicket([1,2,3,4,5,6,7], [1,2,3,4,5,6]);
            const result6 = () => lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6,7]);
            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
            expect(result3).to.throw(Error, 'Invalid input!');
            expect(result4).to.throw(Error, 'Invalid input!');
            expect(result5).to.throw(Error, 'Invalid input!');
            expect(result6).to.throw(Error, 'Invalid input!');
        });
        it('Should work with correct input', function () {
            const result1 = lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,7]);
            const result2 = lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6]);
            expect(result1).to.eql('Congratulations you win, check your reward!');
            expect(result2).to.eql('You win the JACKPOT!!!');
        });
    })
    describe('SECOND CHANCE METHOD TESTS',function(){
        it('Should throw an error if any of the inputs is invalid', function () {
            const result1 = () => lottery.secondChance('10', []);
            const result2 = () => lottery.secondChance([], []);
            const result3 = () => lottery.secondChance(10, 'array');
            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
            expect(result3).to.throw(Error, 'Invalid input!');
        });
        it('Should work with correct input', function () {
            const result1 = lottery.secondChance(10, [1,2,3,4,5,6,7,8,9,10]);
            const result2 = lottery.secondChance(1, [2,3,4,5,6]);
            expect(result1).to.eql('You win our second chance prize!');
            expect(result2).to.eql(`Sorry, your ticket didn't win!`);
        });
    })
});
