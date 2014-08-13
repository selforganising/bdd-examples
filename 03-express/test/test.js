var express = require('express'),
    request = require('supertest'),
    app = require('../app.js');  

request = request(app);  

describe('When a user goes to the home page', function() {
    it("should return status code 200 OK", function(done) {
        request.get('/')
            .expect(200, done);
    });
    it("should return some text referencing 'Camden Town'", function(done) {
        request.get('/')
            .expect(/Camden Town/, done);
    });
});