'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return false if the argument is type of string', function ()    {
        expect(app.reverseNumber('asa')).to.eql(false);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should return ole', function ()    {
        expect(app.returnOnlyLetter('1o2l3e4')).to.eql('ole');
    });
});

describe('isEmail', function ()
{
    it('should return true for email: tom.chr@asd.com', function ()    {
        expect(app.isEmail('tom.chr@asd.com')).to.eql(true);
    });
});
