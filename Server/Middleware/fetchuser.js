import jwt from 'jsonwebtoken';
const key = "iutilsnotebook";
const fetchuser = (req,res,next)=>{
 const authToken =req.header('authToken');
   const data = jwt.verify(authToken,key)
   req.user = data.user;
   next()

}
export default fetchuser;
