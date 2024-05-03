import { expect } from "chai";
import { describe, it, beforeEach } from "mocha";


const apiUrl = "http://localhost:3000/octocat"; // Updated API URL

describe("Automated test to validate that the API works", () => {
  let response;
  let statusCode;

  beforeEach(async () => {
    response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log("===============",response)
    statusCode = response.status
    response = await response.json();
  });

  it('should return an array of gists for username "octocat"', async () => {
    try {
      expect(statusCode).to.equal(200);
      expect(response).to.be.an("array");
      expect(response.length).to.be.greaterThan(0);

      const firstGist = response[0];
      expect(firstGist).to.have.property("description");
      expect(firstGist).to.have.property("url");
    } catch (error) {
      console.error("Test failed:", error);
      throw error;
    }
  });

  it('should include username "octocat" in the gist url ', async () => {
    try {
      expect(statusCode).to.equal(200);
      expect(response).to.be.an("array");
      expect(response.length).to.be.greaterThan(0);

      for (let index = 0; index < response.length; index++) {
        const firstGist = response[index];
        expect(firstGist).to.have.property("url");
        expect(firstGist.url).to.include("octocat");
      }
    } catch (error) {
      console.error("Test failed:", error);
      throw error;
    }
  });
});

describe("Error - Automated test to validate that the API does not work", () => {
  it('Empty Username', async () => {
    try {
      const response = await fetch(apiUrl.replace("octocat", ""), { // Modify URL to remove the username parameter
        method: 'GET', // Change to GET method
        headers: {
          'Content-Type': 'application/json'
        }
      });
      expect(response.status).to.equal(404);
      expect(response.statusText).to.equal('Not Found');
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  it('Unwanted string as username', async () => {
    try {
      const response = await fetch(apiUrl.replace("octocat", "Test_()113"), { // Modify URL to use an unwanted string as the username
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      expect(response.status).to.equal(500);
      expect(responseData.error).to.equal('Failed to fetch gists')

    } catch (error) {
      console.error("Test failed:", error);
      throw error;
    }
  });
});
