import express from 'express';
import User from '../Models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {body,validationResult} from 'express-validator';
const key = "iutilsnotebook";

const router = express.Router();
// router.post('/',(req,res,next)=>{
//         console.log("req",req.body);

//         const user = UserSchema(req.body)
//         user.save()
//         res.send("hello");
// })

// This endpoint created for creating user, no login required
router.post('/createUser',[body('name','Enter a valid name').isLength(3),body('email','Enter a valid email').isEmail(),body('password','Enter a valid password').isLength({min:3})],async (req,res,next)=>{
        try{
                let user={};
                const errors = await validationResult(req);
                if(!errors.isEmpty()){
                       // return res.status(400).json({errors:errors.array()})
                        throw errors.array()
                }
                // Find user
                 user = await User.findOne({email:req.body.email})
                if(user){
                        throw new Error("User Already Exists")
                }
                // Create User
                 user =   await User.create({
                        name:req.body.name,
                        email:req.body.email,
                        password:req.body.password
                })
                const data = {
                        user:{
                                id:user.id
                        }
                }
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password,salt);
               const authToken =  jwt.sign(data,key);
                res.json(user)     
        }catch(err){
                console.error("err",err);
                res.status(500).json(err);
        }finally{
                console.log("finally");   
        }
      
})
export default router;