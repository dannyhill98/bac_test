import request from "supertest";
import dotenv from 'dotenv';
import app from "../../app.js";
import jwt from 'jsonwebtoken';

dotenv.config();

// Testing positive case

describe("GET /Generate_Token", () => {
    it("should return a valid JWT", async () => {
      const response = await request(app).post("/Generate_Token").send({username: 'test', password: 'test'});
      expect(response.statusCode).toBe(200); 
      expect(jwt.verify(response.text, process.env.JWT_SECRET_KEY)).toBeTruthy();
      expect(jwt.decode(response.text).user).toBe('testtest');
    });
  });
  

  // We should also test for the negative cases but for the sake of simplicity I will not do it here.