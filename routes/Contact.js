import express from 'express';
import Contact from '../models/Contact.js';

const app = express();

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, reason, message } = req.body;

    console.log(name, email, phone, reason, message);

    const existingContact = await Contact.findOne({  email, phone, reason });
  
      if (existingContact) {
        return res.json({ 
          success: false, 
          error: 'You have already submitted an inquiry.' 
        });
      }
  

    const newContact = await Contact.create({ name, email, phone, reason, message });
    console.log(newContact);
    

    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.json({ success: false, error: 'Server Error' });
  }
});

export default app;
