var request = require('supertest');
request = request('http://foundersandcoders.org/');

describe('When a user goes to the home page', function() {

    it("should return status code 200 OK", function(done) {
	request.get('/')
	    .expect(200, done);
    });

    it("should return some text referencing 'Camden'", function(done) {
	request.get('/')
	    .expect(/Camden/, done);
    });

});
