import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  }


  useEffect(function() {
    async function getNotes() {
      const allNotes = await notesAPI.index();   
      setNotes(allNotes);
    }
    getNotes()
  }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage addNote={addNote} />} />
              <Route path="/" element={<NotesPage notes={notes} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
