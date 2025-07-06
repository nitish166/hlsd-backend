// health checker and pub-sub

const axios = require('axios');

const {createClient} = require('redis');

// Redis Publisher

const redisPub = createClient();
redisPub.connect();


const servers = [
    {id: 's1', url: 'http://localhost:3001', alive: true},
    {id: 's2', url: 'http://localhost:3002', alive: true},
    {id: 's3', url: 'http://localhost:3003', alive: true}
]


// Health check every 3 second
setInterval( async ()=>{
    for(const server of servers){
        try{
            await axios.get(server.url);
            await redisPub.publish('health', JSON.stringify({id: server.id, url: server.url, alive: true}));
            console.log(`[UP] ${server.url}`)
        }catch(err){
            await redisPub.publish('health', JSON.stringify({id: server.id, url: server.url, alive: false}));
            console.log(`[DOWN] ${server.url}`)
        }
    }
}, 3000)