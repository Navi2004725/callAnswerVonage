import express from "express";

const app = express();

/**
 * Health check (Render requirement)
 */
app.get("/", (req, res) => {
  res.send("VOICE ANSWER SERVER IS RUNNING");
});

/**
 * VOICE ANSWER URL
 * Example:
 * /answer?name=Robbin&lat=6.9271&lng=79.8612
 */
app.get("/answer", (req, res) => {
  const { name, lat, lng } = req.query;

  const message = `
    ${name || "A user"} is in trouble.
    The final location is latitude ${lat}, longitude ${lng}.
    Please respond immediately.
  `;

  res.json([
    {
      action: "talk",
      text: message.replace(/\s+/g, " ").trim(),
      language: "en-US",
      voiceName: "Joanna",
    },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Answer server running on port ${PORT}`);
});
