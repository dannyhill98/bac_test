import request from "supertest";
import dotenv from 'dotenv';
import app from "../../app.js";

dotenv.config();

// Testing positive case

describe("GET /Tracking_parcel", () => {
    it("should return a valid json with tracking info from 3rd party api", async () => {
      const response = await request(app).get("/Tracking_parcel").query({tracking_number: "BPS1EP58YI5SKBR"});
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status');
    });
  });
  

  // We should also test for the negative cases but for the sake of simplicity I will not do it here.

