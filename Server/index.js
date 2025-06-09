const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Database/Database'); 
const AuthRouter = require('./Route/AuthRoute');
const SectionRouter= require('./Route/ProductRoute')
const cors=require('cors')
dotenv.config(); 

const app = express();

app.use(express.json()); 
app.use(cors());

connectDB();

app.use('/api/auth', AuthRouter);
app.use('/api/section', SectionRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
