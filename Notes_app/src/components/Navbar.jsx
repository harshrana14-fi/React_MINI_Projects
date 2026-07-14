import React, { useState } from 'react'

function Navbar() {
    const [notesNo, setNotesNo] = useState(0)

  return (
    <nav className='flex w-full bg-blue-950 h-19 items-center'>
        <div className='flex items-center justify-between w-full mx-10'>
        <div className='leftside' className='flex items-center gap-2 '>
            <div className='logo' className='bg-amber-400 px-3 py-1.5 rounded-xl font-bold' >N</div>
            <div className='text-white font-bold text-2xl' >NoteDesk</div>
        </div>
        <div className='center' className='bg-gray-500 px-4 py-2 rounded-3xl' >
            <div>
                <ul className='flex gap-7 text-white' >
                    <a href="#notes"><li>All Notes</li></a>
                    <a href="#pinned"><li>Pinned </li></a>
                    <a href="/trash"><li>Trash</li></a>
                </ul>
            </div>
        </div>
        <div className="leftside" className='text-white ' >
            6 Notes
        </div>
        </div>
    </nav>
  )
}

export default Navbar
