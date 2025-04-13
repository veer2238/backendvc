import express from "express";
import Passport from "../models/Passport.js";

const app = express()


app.post("/api/passport", async (req, res) => {
    const { slug, data } = req.body;
  
    console.log("Received request:", slug, data);  // Add this to debug
  
    if (!slug || !data) return res.status(400).json({ message: "Missing slug or data" });
  
    try {
      const existing = await Passport.findOne({ slug });
  
      if (existing) {
        existing.data = data;
        await existing.save();
        return res.json({ message: "Updated existing entry" });
      }
  
      await Passport.create({ slug, data });
      res.json({ message: "Form saved successfully" });
  
    } catch (err) {
      console.error("Save error:", err);
      res.status(500).json({ message: "Server error" });
    }
  });
  

app.get("/api/passport/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const entry = await Passport.findOne({ slug });
    if (!entry) return res.status(404).json({ message: "Not found" });
    res.json(entry.data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default app;
