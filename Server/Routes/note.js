import express from 'express';
import Notes from '../Models/Notes.js'
import {body,validationResult} from 'express-validator';
import fetchuser from '../Middleware/fetchuser.js'

const router = express.Router();

//Router 1 : Fetch all notes by using GET /note/get/fetchallnotes auth required
router.get('/fetchallnotes',fetchuser,async(req,res,next)=>{
        try{
                        let notes =await Notes.find({user:req.user.id});
                        res.json(notes)
        }catch(err){
                console.error(err)
                res.status(500).json({Error:err})
        }
})

//Router 2 : Create notes by using GET /note/get/addnote auth required
router.post('/addnote',fetchuser,[body('title', 'Enter a valid title').isLength(3), body('description', 'Description must be a 5 character').isLength(5)],async(req,res,next)=>{
        try{

        
     const  {title,description,tag} = req.body;
        const error = await validationResult(req);
        if(!error){
                res.status(500).json({error:error.array()})
        }
        const note = new Notes({title,description,tag,user:req.user.id})
        const savedNote = await note.save();
        res.json(savedNote)
}catch(error){
        throw error
}

})


export default router;