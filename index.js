import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/heavy-process", async (req, res) => {
  await new Promise((r) => setTimeout(r, 400)); // simulate heavy task
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Custom backend listening on http://localhost:${port}`);
});
