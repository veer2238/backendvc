import express from 'express';
import Newsletter from '../models/News.js';

const app = express();

//  POST - Subscribe to newsletter
app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const existing = await Newsletter.findOne({ email });
    if (existing) {
        return res.json({ success: false, error: 'Already subscribed' });
    }

    const newSub = await Newsletter.create({ email });

    console.log(newSub);
   
    res.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    res.json({ success: false, error: 'Server Error' });
  }
});


//  GET - All subscribers
app.get('/all-news', async (req, res) => {
    try {
      const subs = await Newsletter.find().sort({ subscribedAt: -1 });
      res.json({ success: true, data: subs });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  });

  export default app
  

  


  


