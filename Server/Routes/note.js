import express from 'express';
import NoteSchema from '../Models/Notes.js'
import {body,validationResult} from 'express-validator';
const router = express.Router();
router.post('/',async(req,res,next)=>{
        try{
                res.send(req.body)
              
        }catch(err){
                console.error("err",err);
                res.status(500).send(err);
        }finally{
                console.log("finally");   
        }
      
})

export default router;