import { useState } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newSubject, setNewSubject] = useState('');

  const addNote = () => {
    if (newNote.trim() && newSubject.trim()) {
      const newNoteItem = {
        id: Date.now(),
        subject: newSubject,
        text: newNote,
      };
      setNotes([...notes, newNoteItem]);
      setNewNote('');
      setNewSubject('');
    }
  };

  const editNote = (id, field, value) => {
    setNotes(
      notes.map(note => (note.id === id ? { ...note, [field]: value } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return {
    notes,
    newNote,
    newSubject,
    setNewNote,
    setNewSubject,
    addNote,
    editNote,
    deleteNote,
  };
};

export default useNotes;
