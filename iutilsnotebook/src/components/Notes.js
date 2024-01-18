import React, { useEffect } from 'react'
import {useContext} from 'react'
import createContext from '../context/notes/NoteContext'
import Noteitems from './Noteitems';
export default function Notes() {
    const  {notes,fetchAllNotes} =useContext(createContext);
    useEffect(()=>{
        fetchAllNotes()
    },[])
  return (
    <div>
      <div className='row my-3'>
      <h1>Your Note</h1>
      
      {notes.map((note)=>{
          return <Noteitems key={note._id} note={note} />
      })}
      </div>
    </div>
  )
}
