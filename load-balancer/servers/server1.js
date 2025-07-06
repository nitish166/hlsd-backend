const express = require("express");
const app = express();

const PORT = 3001;

app.get('/', (req, res)=>{
    res.send(`Hello from server 1`);
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});


