var request = require("request");
var fixture = require("../fixture/db_fixture");

describe("Category API", function() {
    it("should fetch categories from database", function(done) {
      request.get("http://localhost:3000/category/books", function(error, response, body) {
        expect(response.statusCode).toEqual(200);
        expect(body).toEqual(fixture.category);
        done();
      });
    });
});