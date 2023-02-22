import express from "express";
import fetch from "node-fetch";
const app = express();
app.listen(process.env.PORT || 3000, () => console.log("Server started"));
app.get("/", (req, res) => {
  fetch("https://streak-stats.demolab.com/?user=weryzebra-yue&type=json")
    .then((response) => response.json())
    .then((data) => {
      const currentStreak = data.currentStreak.length;
      res.type("svg");
      res.send(
        `<svg xmlns="http://www.w3.org/2000/svg"  height="40" width="250" ><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="1.25em" fill="white" font-weight="bold" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'" > Target for 2023 : ${currentStreak} / 169</text></svg>`
      );
    });
});
