import React from 'react'

function NoteCard({note, deleteNote, editNote}) {
    const handleDelete = () => {
    deleteNote(note.id);
}

    const handleEdit = () => {
        editNote(note);
    }
    
  return (
        <div className='bg-amber-100 text-black p-5 rounded-xl w-80 '>
            <div  className='border-b-1 border-gray-400 pb-10'>
                <p className='font-bold text-2xl' >{note.title}</p>
                <p>{note.content} </p>
            </div>
            <div className='flex justify-between items-center pt-1'>
                <p>{note.createdAt}</p>
                <div>
                    <button onClick={handleEdit} className='cursor-pointer'>📝</button>
                    <button onClick={handleDelete} className='cursor-pointer'>🗑️</button>
                 </div>
            </div>
        </div>
  )
}

export default NoteCard
