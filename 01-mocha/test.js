var assert = require('assert');

describe('The number one', function() {

    it('should equal 1', function() {
	assert.equal(1, 1);
    });

    it('should not equal 2', function() {
	assert.notEqual(1, 2);
    });

});
