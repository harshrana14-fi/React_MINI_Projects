import React, { useState } from 'react'

function NoteForm({ addNote }) {
    const handleSubmit = () => {
        if(!title.trim() || !content.trim()){
            return;
        }
        const newNote = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toLocaleString(),
            pinned: false
        }
        addNote(newNote);

    setTitle("");
    setContent("");
    }

    const [title, setTitle] = useState("")
    // console.log(title)
    const [content, setContent] = useState("")
    // console.log(content)

  return (
    <div className='w-full bg-gray-900 text-white px-10 pb-10 '>
     <div className='bg-gray-600 rounded-2xl p-5 flex flex-col gap-2.5'>
        <div>New Note</div>
        <div className='flex flex-col gap-1.5 border-b-1 border-b-gray-400'>
            <div className='w-full'>
                <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" placeholder='Give it a title...' 
                className='w-full text-3xl' />
            </div>
            <div className='w-full pb-3'>
                <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5" className='w-full ' 
                placeholder='Write something worth remembering...'>
                </textarea>
            </div>
        </div>
        <div className='flex justify-end text-black mt-1'>
            <button 
            onClick={handleSubmit}
            className='bg-amber-300 px-3 py-1.5 rounded-3xl items-center cursor-pointer'>
                ➕ Add Note
            </button>
        </div>
     </div>
    </div>
  )
}

export default NoteForm
