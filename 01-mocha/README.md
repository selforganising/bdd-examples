# Mocha

Install Mocha as follows:

    npm install -g mocha

In a new directory, create a file `test.js` and add the following:

    var assert = require('assert');

    describe('The number one', function() {

        it('should equal 1', function() {
            assert.equal(1, 1);
        });

        it('should not equal 2', function() {
            assert.notEqual(1, 2);
        });

    });

Then run:

    mocha

And your tests should pass, like this:

    The number one
      ✓ should equal 1
      ✓ should not equal 2
    
    2 passing

