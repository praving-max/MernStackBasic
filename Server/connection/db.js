import mongoose from 'mongoose';
const connectToMongo =()=>{

  mongoose.connect('mongodb://127.0.0.1:27017/utilsDB')
}

export {connectToMongo} 
