const chai = require('chai');
const sum = require('../04-sumnumbers');

describe('Sum function', function(){
    it('Should sum integers correctly',function(){
        //Arrange - define variables
        let arr=[1,2,3];
        //Act - use function
        const result = sum(arr);
        //Assert - expectancies
        chai.expect(result).to.equal(6);
    })
    it('Should parse into numbers correctly',function(){
        //Arrange - define variables
        let arr=['1','2','3'];
        //Act - use function
        const result = sum(arr);
        //Assert - expectancies
        chai.expect(result).to.equal(6);
    })
    it('Should not sum anything except numbers',function(){
        //Arrange - define variables
        let arr=['two','2','3'];
        //Act - use function
        const result = sum(arr);
        //Assert - expectancies
        chai.expect(result).to.be.NaN;
    })
    it('Should sum decimal numbers correctly',function(){
        //Arrange - define variables
        let arr=['1.5',2,3.4];
        //Act - use function
        const result = sum(arr);
        //Assert - expectancies
        chai.expect(result).to.closeTo(6.9,0.000000001);
    })
})