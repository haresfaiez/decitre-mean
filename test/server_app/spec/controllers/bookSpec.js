var request = require("request");
var fixture = require("../fixture/db_fixture");

describe("Book api", function() {
    it("should fetch an existing book from database", function(done) {
      request.get("http://localhost:3000/book/5726173e78d1d8abc5e65f73", function(error, response, body) {
        expect(response.statusCode).toEqual(200);
        expect(body).toEqual(fixture.book.css_in_action);
        done();
      });
    });
});
