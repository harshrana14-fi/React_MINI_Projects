import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const[notes, setNotes] = useState([])
  
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return[newNote, ...prevNotes]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      })
    })
  }

  return (
    <div className="h-screen  w-full">
      <Navbar />
      <SearchBar />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
