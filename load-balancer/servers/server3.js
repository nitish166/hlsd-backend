const express = require("express");
const app = express();

const PORT = 3003;

app.get('/', (req, res)=>{
    res.send(`Hello from server 3`);
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});
