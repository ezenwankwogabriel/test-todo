const expect = require("chai").expect;
const request = require("supertest");
const app = require("../api");
const dburl = 'mongodb://localhost:27017/todo'
const db = require("../database");

describe("api/users=", () => {
    beforeAll(async () => {
        await db.connect();
    });

    it("gets the test endpoint", async done => {
        const response = await request(app).get("/");

        expect(response.status).to.equal(200);
        done();
    });

});