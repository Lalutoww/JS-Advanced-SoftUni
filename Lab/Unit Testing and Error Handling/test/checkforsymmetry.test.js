const chai = require('chai');
const isSymmetric = require('../05-checkforsymmetry');

describe('isSymmetric function: ', function(){
    it('Should take an array as an argument',function(){
        //Arrange
        let arrayFalse = 1;
        //Act
        const result = isSymmetric(arrayFalse);
        //Assert
        chai.expect(result).to.equal(false);
    })
    it('Should display false if an array is not symmetric',function(){
        //Arrange
        let array = [1,2,2];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(false);
    })
    it('Should display true if an array is symmetric',function(){
        //Arrange
        let array = [1,2,1];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(true);
    })
    it('Should display true if the array contains only one element',function(){
        //Arrange
        let array = [1];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(true);
    })
    it('Should display true if the array is empty',function(){
        //Arrange
        let array = [];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(true);
    })
    it('Should display false the input is string instead of array',function(){
        //Arrange
        let array = 'test';
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(false);
    })
    it('Should display true if array has matrices inside it',function(){
        //Arrange
        let array = [[1,2],[12,13],[1,2]];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(true);
    })
    it('Should return false if any of the duplicate numbers is negative',function(){
        //Arrange
        let array = [1,2,-1];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(false);
    })
    it('Should work with anything as element in the array',function(){
        //Arrange
        let array = ['text',1,2,1,2,'text'];
        //Act
        const result = isSymmetric(array);
        //Assert
        chai.expect(result).to.equal(false);
    })
})