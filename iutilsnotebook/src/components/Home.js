import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

export default function Home() {
  return (
    <div className='container my-3'>
      <AddNote></AddNote>
      <Notes></Notes>
    </div>
  )
}
