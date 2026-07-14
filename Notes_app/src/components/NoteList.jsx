import React from 'react'
import NoteCard from './NoteCard'

function NoteList({notes, deleteNote}) {
  return (
    <div id='notes' className='w-full bg-gray-900 px-10 pb-10 text-white flex flex-col gap-2.5'>
        <div className='flex justify-between'>
            <p className='text-2xl'>My Notes:</p>
            <p>Sorted by Last Edited</p>
        </div>
        <div className='grid grid-cols-4 gap-2.5'>
        {
            notes.map((note) => (
                <NoteCard 
                    key={note.id}
                    note = {note}
                    deleteNote={deleteNote}
                />
            ))
        }
        </div>
    </div>
  )
}

export default NoteList
