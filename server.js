const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors')
const corsOption = require('./config/corsOption')

require('dotenv').config();

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended: flase}));


app.use('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>console.log(`server is live at ${PORT}`))