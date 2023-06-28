const expect = require('chai').expect;
const lookupChar = require('../03-charlookup');

describe('CHAR LOOKUP FUNCTION',function(){
    it('Returns undefined when first parameter is not a string', function(){
        const string = 1;
        const index = 0;

        const result = lookupChar(string,index);
        expect(result).to.be.undefined;
    })
    it('Returns undefined when second parameter is not a number', function(){
        const string = 'abc';
        const index = 'a';
        const result = lookupChar(string,index);
        expect(result).to.be.undefined;
    })
    it('Returns undefined when second parameter is a decimal number', function(){
        const string = 'abc';
        const index = 1.1;
        const result = lookupChar(string,index);
        expect(result).to.be.undefined;
    })     
    it('Returns Incorrect index when index is a negative number', function(){
        const string = 'abc';
        const index = -1;
        const result = lookupChar(string,index);
        expect(result).to.equal('Incorrect index');
    })
    it('Returns Incorrect index when index is bigger or equal to string.length', function(){
        const string = 'abc';
        const index = string.length;
        const result = lookupChar(string,index);
        expect(result).to.equal('Incorrect index');
    })
    it('Returns the character at the specified index when both inputs are correct', function(){
        const string = 'a';
        const index = 0;
        const result = lookupChar(string,index);
        expect(result).to.equal('a');
    })
    it('Returns the character at the specified index when both inputs are correct', function(){
        const string = 'abc';
        const index = 1;
        const result = lookupChar(string,index);
        expect(result).to.equal('b');
    })
})