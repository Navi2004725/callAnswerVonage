import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

let callAnswered = false;

// Bulk call webhook example
app.post("/call-status", (req, res) => {
  const { to, status } = req.body;
  console.log(`📩 Status update for ${to}: ${status}`);

  if (status === "answered") {
    console.log(`✅ Call answered by ${to}`);
    callAnswered = true; // stop bulk calls
  }

  res.status(200).send("OK");
});

// Optional: health check
app.get("/", (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
