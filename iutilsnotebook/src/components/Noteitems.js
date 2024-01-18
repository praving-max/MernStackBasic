import React,{useContext} from 'react';
import createContext from '../context/notes/NoteContext';

export default function Noteitems(props) {
                        const {deleteNote}=useContext(createContext)
    const {note} = props;
  return (
    <div className='col-md-3'>
       
    <div className="card">
  <div className="card-body">
    <div className='d-grid d-md-flex justify-content-md-end"'>
    <h5 className='card-title'>{note.title}</h5>
 <button type="button" className="btn btn-primary btn-sm mx-3">Edit</button>
 <button type="button" className="btn btn-warning btn-sm mx-3" onClick={()=>{
  deleteNote(note._id)
 }}>Delete</button>
    </div>
    <p className='card-text'>{note.description} </p> 
  </div>
</div>
    </div>
  )
}
