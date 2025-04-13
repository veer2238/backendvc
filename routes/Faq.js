import Faq from '../models/Faq.js';
import express from 'express';
const app = express()


// Example route to get all FAQs
app.get('/faqs-info', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error });
  }
});


app.post('/faqs', async (req, res) => {
    try {
      const { question, answer } = req.body;

      console.log(question, answer);
  
      const newFaq =await  Faq.create({ question, answer});

      console.log(newFaq);
      
  
      res.status(201).json({ message: 'FAQ created successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Error creating FAQ', error });
    }
  });

export default app;
