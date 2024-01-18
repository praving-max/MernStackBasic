import noteContext from "./NoteContext";
import React from 'react';
import {useState} from 'react';
const HOST = 'http://127.0.0.1:5000'
// export default function NoteState() {
//     //     const s1 = {
//     //     "name":"harry",
//     //     "mono":"9834"
//     // };
//    const [state,setState] = useState("dgfg")
//   return (
//     <div>
      
//     </div>
//   )
// }


const NoteState = (props)=>{
  const initialnote = []
  const [notes,setNotes] = useState(initialnote)

   //Fetch All note
   const fetchAllNotes = async()=>{
   const response =  await fetch(`${HOST}/note/get/fetchallnotes`,{
      method:'GET',
      headers:{
        "Content-Type":'application/json',
        "authToken":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZWU2MjJkMzZiMGFlNGUxNDNlMzJmIn0sImlhdCI6MTcwNDk1NzM2N30.qjG7y1U0715oHTNf1GVvCHsGF9ib1wAaxhtXcSVlcgo'},
      })
      const json = await response.json()
      setNotes(notes.concat(json))
  }

  //Add note
  const addNotes = async({title,description,tag})=>{
    console.log("title,description,tag",JSON.stringify({title,description,tag}))
   const response =  await fetch(`${HOST}/note/get/addnote`,{
      method:'POST',
      headers:{
        "Content-Type":'application/json',
        "authToken":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZWU2MjJkMzZiMGFlNGUxNDNlMzJmIn0sImlhdCI6MTcwNDk1NzM2N30.qjG7y1U0715oHTNf1GVvCHsGF9ib1wAaxhtXcSVlcgo'},
        body:JSON.stringify({title,description,tag})
      })
      const json = await response.json()
      setNotes(notes.concat(json))
  }
  //Delete note
  const deleteNote=(id)=>{
   const newNotes = notes.filter((item,index,array)=>{
              return item._id !== id
    })
    setNotes(newNotes)
    console.log("deleting note with id",id)
  }

  // Edit note 
  const editNote =()=>{

  }
       return(
        <noteContext.Provider value={{notes,addNotes,deleteNote,fetchAllNotes}}>{
           props.children
            }</noteContext.Provider>
       )
}
export default NoteState;