const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors')
const corsOption = require('./config/corsOption')
require('dotenv').config();
const mongoose = require('mongoose')
const connectDB = require("./config/dbCon")

connectDB();

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',require('./routes/api/post'))
app.use('/feedback', require('./routes/api/contact'))

mongoose.connection.once("open", () => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});