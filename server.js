const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Restaurant ID:", id);

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=${id}&submitAction=ENTER`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
          "Accept": "application/json",
          "Referer": "https://www.swiggy.com/",
        },
      }
    );

    const text = await response.text();

    if (!text) {
      throw new Error("Empty response from Swiggy");
    }

    const data = JSON.parse(text);

    res.json(data);

  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ error: "Failed to fetch menu data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});