// health checker and pub-sub

const axios = require('axios');

const {servers} = require('../utils/config');

setInterval(()=>{
    servers.forEach(async (server)=>{
        try{
            const res = await axios.get(server.url);
            server.alive = true;
            console.log(`[UP] ${server.url}`);
        }catch(err){
            server.alive = false;
            console.log(`[DOWN] ${server.url}`);
        }
    });
}, 3000)