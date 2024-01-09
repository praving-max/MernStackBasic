import mongoose from 'mongoose'
const {Schema} = mongoose;

const NoteSchema = new Schema({
                title:{
                    type:String,
                    required:true
                },
                discription:{
                    type:String,
                    required:true
                },
                tag:{
                    type:String,
                    default:"General"
                },
                date:{
                    type:Date,
                    default:Date.now()
                }

})

export default mongoose.model('note',NoteSchema);