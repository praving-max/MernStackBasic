import React, { useState } from 'react'
import {useContext} from 'react'
import createContext from '../context/notes/NoteContext'


function AddNote() {
    //let obj={};
    const  {addNotes} =useContext(createContext);
   const [note,setObj]=useState({title:"",description:"",tag:"default"});
   const onchange = (e)=>{
       setObj({...note,[e.target.id]:e.target.value})
   } 
   const handleOnSubmit=(e)=>{
    e.preventDefault()
            addNotes({...note})
   }   

  return (
    <div>
       <h1>Add Note</h1>
     <form className='my-3' onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" onChange={onchange} 
     id="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" onChange={onchange}  id="description"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddNote
