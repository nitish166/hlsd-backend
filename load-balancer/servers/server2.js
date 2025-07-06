const express = require("express");
const app = express();

const PORT = 3002;

app.get('/', (req, res)=>{
    res.send(`Hello from server 2`);
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});
