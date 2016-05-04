var request = require("request");
var fixture = require("../fixture/db_fixture");

describe("Book API", function() {
    it("should fetch an existing book from database", function(done) {
      var css_in_actionURL= "http://localhost:3000/book/" + fixture.book.css_in_action._id;
      request.get(css_in_actionURL, function(error, response, body) {
        expect(response.statusCode).toEqual(200);
        expect(body).toEqual(fixture.book.css_in_action.row);
        done();
      });
    });
});
