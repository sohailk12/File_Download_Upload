const express = require("express");
const router = require('./routes/route.js');

const app = express();

app.use(express.json());

app.use('/',router);

app.listen(3000,()=>{
    console.log('Server Started on PORT: 3000');
})


