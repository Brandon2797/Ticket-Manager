import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
console.log(process.env.MY_SECRET)

const server = express()

server.use(cors())

//location/callback
server.get('/', (req,res) => {
    res.send("cat")
    
});
server.listen( 3000, ()=> console.log(`listening on port ${3000}`))