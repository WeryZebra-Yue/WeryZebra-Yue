import express from "express";
import fetch from "node-fetch";
const app = express();
app.listen(process.env.PORT || 3000, () => console.log("Server started"));
app.get("/", (req, res) => {
  fetch("https://streak-stats.demolab.com/?user=weryzebra-yue&type=json")
    .then((response) => response.json())
    .then((data) => {
      const currentStreak = data.currentStreak.length;

      res.type("text/html");
      res.send(`
      <svg>
        <text x="0" y="15" fill="black"  font-weight="bold">${currentStreak} / 169</text>
      </svg>
        `);
    });
});
