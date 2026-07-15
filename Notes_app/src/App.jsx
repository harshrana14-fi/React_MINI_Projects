import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [notes, setNotes] = useState(() => {
  const storedNotes = localStorage.getItem("notes");

  return storedNotes ? JSON.parse(storedNotes) : [];
});
  
  const addNote = (noteData) => {
    setNotes((prevNotes) => {
      return[noteData, ...prevNotes]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      })
    })
  }

  const [editingNote, setEditingNote] = useState(null)

  const editNote =(note) => {
    console.log(note)
    setEditingNote(note)
  }

  const updateNote = (updateNote) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if(note.id === updateNote.id) {
          return updateNote;
        }
        return note;
      })
    })
    setEditingNote(null)
  }

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

//   useEffect(() => {

//   const storedNotes = localStorage.getItem("notes");

//   if (storedNotes) {
//     const parsedNotes = JSON.parse(storedNotes);
//     setNotes(parsedNotes);
//   }
// }, []);

  return (
    <div className="h-screen  w-full">
      <Navbar />
      <SearchBar />
      <NoteForm addNote={addNote} editingNote={editingNote} 
        updateNote= {updateNote} />
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote} 
        editNote={editNote} 
        updateNote= {updateNote}
      />
    </div>
  );
}

export default App;
