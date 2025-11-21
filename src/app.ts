import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hola, ${name}` });
});

export default app;
