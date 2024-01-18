import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as db from './connection/db.js'
import routerAuth from './Routes/auth.js'
import routerNote from './Routes/note.js'
db.connectToMongo()
const app = express();
const PORT = 5000;
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.get('/',(req,res)=>{
    
    res.send("hello")
})
app.use('/auth/get',routerAuth);
app.use('/note/get',routerNote);
app.listen(PORT,()=>{
    console.log(`inotebook backend Server running successfully`)
}
)