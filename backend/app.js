const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRouter = require('./routes/user-routes.js');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running');
});

app.use(userRouter);

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});