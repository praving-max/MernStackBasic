import express from 'express';
import User from '../Models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fetchuser from '../Middleware/fetchuser.js'
import { body, validationResult } from 'express-validator';
const key = "iutilsnotebook";

const router = express.Router();
// router.post('/',(req,res,next)=>{
//         const user = UserSchema(req.body)
//         user.save()
//         res.send("hello");
// })

// This endpoint created for creating user, no login required
router.post('/createUser', [body('name', 'Enter a valid name').isLength(3), body('email', 'Enter a valid email').isEmail(), body('password', 'Enter a valid password').isLength({ min: 3 })], async (req, res, next) => {
        try {
                let user = {};
                const errors = await validationResult(req);
                if (!errors.isEmpty()) {
                        // return res.status(400).json({errors:errors.array()})
                        throw errors.array()
                }
                // Find user
                user = await User.findOne({ email: req.body.email })
                if (user) {
                        throw new Error("User Already Exists")
                }
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password, salt);
                // Create User
                user = await User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                })
                const data = {
                        user: {
                                id: user.id
                        }
                }

                const authToken = jwt.sign(data, key);
                res.json({ authToken })
        } catch (err) {
                res.status(500).json(err);
        } finally {
        }

})

router.post('/login', [body('email', 'Please enter Valid email').isEmail(), body('password', 'Please enter valid password').exists()], async (req, res, next) => {
        try {
                const error = await validationResult(body)
                if (!error) {
                        res.status(500).json({Error:error.array()})
                }
                const { email, password } = req.body;
                console.log("email",email,password)
                let user = await User.findOne({ email: email })
                if (!user) {
                     throw new Error("Please enter valid credentials!!!")
                }
                const isPwdCorrect = await bcrypt.compare(password, user.password);
                if (!isPwdCorrect) {
                        throw new Error("Please enter valid credentials!!!")
                }
                const data = {
                        user: {
                                id: user.id
                        }
                }

                const authToken = jwt.sign(data, key);
                res.json({ authToken })

        } catch (error) {
               console.error(error)
                res.status(500).send(error)
        }
})
// Fetch user details : Auth required
router.get('/fetchuser',fetchuser,async(req,res,next)=>{
        try{
                        const id =req.user.id;
                        let user =await User.findById(id).select('-password');
                        res.json(user)
        }catch(err){
                console.error(err)
                res.status(500).json({Error:err})
        }
})
export default router;