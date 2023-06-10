const chai = require('chai');
const rgbToHexColor = require('../06-rgbtohex');

describe('RGB TO HEX FUNCTION: ', function () {
    it('Should return the same color in a hexademical format', function () {
        //Arrange
        let red = 100;
        let green = 100;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.equal('#646464');
    });
    it('Should return undefined if red is not an integer', function () {
        //Arrange
        let red = 100.1;
        let green = 100;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return undefined if green is not an integer', function () {
        //Arrange
        let red = 100;
        let green = 100.1;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return undefined if blue is not an integer', function () {
        //Arrange
        let red = 100;
        let green = 100;
        let blue = 100.1;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return undefined if any of the inputs is not a number', function () {
        //Arrange
        let red = 'test';
        let green = 100;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return undefined if any of the inputs is above range', function () {
        //Arrange
        let red = 257;
        let green = 100;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return undefined if any of the inputs is below range', function () {
        //Arrange
        let red = -1;
        let green = 100;
        let blue = 100;
        //Act
        const result = rgbToHexColor(red, green, blue);
        //Assert
        chai.expect(result).to.be.undefined;
    });
    it('Should return correct result in some edge case red values', function () {
        //Arrange
        let red1 = 0;
        let red2 = 255;
        let red3 = -1;
        let red4 = 256;
        let green = 100;
        let blue = 100;
        //Act
        const result1 = rgbToHexColor(red1, green, blue);
        const result2 = rgbToHexColor(red2, green, blue);
        const result3 = rgbToHexColor(red3, green, blue);
        const result4 = rgbToHexColor(red4, green, blue);

        //Assert
        chai.expect(result1).to.equal('#006464');
        chai.expect(result2).to.equal('#FF6464');
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    });
    it('Should return correct result in some edge case green values', function () {
        //Arrange
        let green1 = 0;
        let green2 = 255;
        let green3 = -1;
        let green4 = 256;
        let red = 100;
        let blue = 100;
        //Act
        const result1 = rgbToHexColor(red, green1, blue);
        const result2 = rgbToHexColor(red, green2, blue);
        const result3 = rgbToHexColor(red, green3, blue);
        const result4 = rgbToHexColor(red, green4, blue);

        //Assert
        chai.expect(result1).to.equal('#640064');
        chai.expect(result2).to.equal('#64FF64');
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    });
    it('Should return correct result in some edge case blue values', function () {
        //Arrange
        let blue1 = 0;
        let blue2 = 255;
        let blue3 = -1;
        let blue4 = 256;
        let red = 100;
        let green = 100;
        //Act
        const result1 = rgbToHexColor(red, green, blue1);
        const result2 = rgbToHexColor(red, green, blue2);
        const result3 = rgbToHexColor(red, green, blue3);
        const result4 = rgbToHexColor(red, green, blue4);

        //Assert
        chai.expect(result1).to.equal('#646400');
        chai.expect(result2).to.equal('#6464FF');
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    });
});
