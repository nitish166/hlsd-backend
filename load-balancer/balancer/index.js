// main load blancer

const express = require("express");
const axios = require("axios");
const {servers} = require('../utils/config');

const app = express();
const PORT = 8000;

let current = 0;

app.get('/', async(req, res)=>{
    const activeServers = servers.filter(s=>s.alive);

    if(activeServers.length===0){
        res.statusCode(503).send('No server available');
    }

    const server = activeServers[current % activeServers.length];
    current++;

    try{
        const response = await axios.get(server.url);
        res.send(response.data);
    }catch(err){
        server.alive = false;
        res.statusCode(502).send('Server down, try again');
    }
});

app.listen(PORT, ()=> {console.log(`Load Balancer running on at port ${PORT}`)});