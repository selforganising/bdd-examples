# Supertest

As well as *mocha*, we are going to use [*Supertest*](https://github.com/visionmedia/supertest), a JavaScript library for testing HTTP servers. This will allow us to test actual web pages, making GET and POST requests and checking the response.

Using Supertest, we can easily map user stories to acceptance tests for web applications.

    npm install -g supertest

A test script might look like this:

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

And these should pass as follows:

    For a user, the home page
      ✓ should return status code 200 OK (207ms)
      ✓ should return some text referencing 'Camden' (243ms)

    2 passing (459ms)

(It is possible the first test will fail with *"Error: expected 200 "OK", got 302 "Moved Temporarily"*. If that happens, just run the test again.)