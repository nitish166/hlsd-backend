// main load blancer

const express = require("express");
const axios = require("axios");
const {createClient} = require('redis');

const app = express();
const PORT = 8000;

let servers = [];


// Redis subscriber

const redisSub = createClient();
redisSub.connect();


// subscribe to redis channel

redisSub.subscribe('health', (message)=>{
    const serverStatus = JSON.parse(message);

    const index = servers.findIndex(s => s.id === serverStatus.id);

    if(index !==-1){
        servers[index].alive = serverStatus.alive;
    }else{
        servers.push({...serverStatus});
    }

    console.log(`[${serverStatus.alive ? 'ALIVE' : 'DEAD'}] ${serverStatus.url}`);
})


// Load Balancing Logic (Round Robin)

let current = 0;

app.get('/', async(req, res)=>{
    const activeServers = servers.filter(s=>s.alive);

    if(activeServers.length===0){
        res.status(503).send('No server available');
    }

    const server = activeServers[current % activeServers.length];
    current++;

    try{
        const response = await axios.get(server.url);
        res.send(response.data);
    }catch(err){
        server.alive = false;
        res.status(502).send('Server down, try again');
    }
});

app.listen(PORT, ()=> {console.log(`Load Balancer running on at port ${PORT}`)});