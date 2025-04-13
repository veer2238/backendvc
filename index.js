import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import Faq from './routes/Faq.js';
import News from './routes/News.js';
import Contact from './routes/Contact.js';
import PassportRoutes from './routes/Passport.js';
dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


const DB = process.env.MONGODB_URL;

// MongoDB Connection
mongoose.connect(DB)
.then(() => console.log(' MongoDB connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/',Faq)
app.use('/', News);
app.use('/',Contact)
app.use('/', PassportRoutes);

// Start Server
app.listen(4032, () => {
  console.log(' Server is running on port 4032');
});
