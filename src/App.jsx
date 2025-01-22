import React from 'react';
import NoteInput from '../components/NoteInput';
import NoteList from '../components/NoteList';
import useNotes from '../components/useNotes';
import './bootstrap.min.css';
import './App.css';

const App = () => {
  const { notes, newNote, newSubject, setNewNote, setNewSubject, addNote, editNote, deleteNote } = useNotes();

  return (
    <div className="app text-light p-4 min-vh-100">
      <div className="container">
        <h1 className="text-center mb-4">Notes App</h1>
        <div className="row">
          <div className="col-lg-7">
            <NoteInput 
              newNote={newNote} 
              newSubject={newSubject}
              setNewNote={setNewNote} 
              setNewSubject={setNewSubject}
              addNote={addNote} 
            />
          </div>
          <div className="col-lg-1">
          </div>
          <div className="col-lg-4">
            <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;