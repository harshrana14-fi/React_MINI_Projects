import React from 'react'

function SearchBar() {
  return (
    <div className='w-full bg-gray-900 text-white p-10 flex flex-col gap-6' >
      <div className='flex flex-col gap-2'>
        <div className="tag" className='text-amber-400' >Desk / Board</div>
        <div className="head" className='text-4xl font-bold' >Everthing you're keeping track of.</div>
      </div>
      <div className="search">
        <input 
          className=' bg-gray-600 w-full px-3 py-2.5 rounded-3xl flex '
          type="search"
          placeholder='Search your Notes by title or content...'/>
      </div>
    </div>
  )
}

export default SearchBar
