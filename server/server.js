const express = require('express');
const app = express();
require('dotenv').config(); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use('/',userRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`I'm running on port: ${PORT}`);
});
