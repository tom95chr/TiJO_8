'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return false if the argument is type of string', function ()    {
        expect(app.reverseNumber('asa')).to.eql(false);
    });
    it('should return 321 if argument is 123', function ()    {
        expect(app.reverseNumber(123)).to.eql(321);
    });
    it('should return false', function ()    {
        expect(app.reverseNumber('123a')).to.eql(false);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should return ole', function ()    {
        expect(app.returnOnlyLetter('1o2l3e4')).to.eql('ole');
    });
    it('should return false', function ()    {
        expect(app.returnOnlyLetter(123)).to.eql(false);
    });
});

describe('isEmail', function ()
{
    it('should return true for email: tom.chr@asd.com', function ()    {
        expect(app.isEmail('tom.chr@asd.com')).to.eql(true);
    });
    it('should return false', function ()    {
        expect(app.isEmail('tomchrasd.com')).to.eql(false);
    });
});
