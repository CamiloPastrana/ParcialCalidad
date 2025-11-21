import request from "supertest";
import app from "../src/app";

describe("API básica", () => {
  it("GET /health responde 200 y status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("GET /hello/:name devuelve saludo", async () => {
    const res = await request(app).get("/hello/Wilker");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hola, Wilker");
  });
});
