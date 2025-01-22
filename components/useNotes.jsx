import { useState, useEffect } from 'react'
import { fetchNotes, addNote, editNote, deleteNote } from './AllAPI'

const useNotes = () => {
  const [notes, setNotes] = useState([])  // Array of notes
  const [newNote, setNewNote] = useState('')  // New note text
  const [newSubject, setNewSubject] = useState('')  // New note subject

  useEffect(() => {
    const loadNotes = async () => { // Load notes from the server
      try {
        const data = await fetchNotes();  // Fetch notes from the server
        setNotes(data); // Set the notes state to the fetched data
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }

    loadNotes()  // Call the loadNotes function
  }, [])

  const handleAddNote = async () => {
    if (!newSubject || !newNote) return  // If either the subject or note is empty, return
    try {
      const note = await addNote(newSubject, newNote) // Add a new note
      setNotes([...notes, note]) // Add the new note to the notes state
      setNewSubject('') // Reset the newSubject and newNote states
      setNewNote('')  // Reset the newSubject and newNote states
    } catch (error) {
      console.error('Error adding note:', error)  
    }
  }

  const handleEditNote = async (id, updatedFields) => { 
    try {
      const updatedNote = await editNote(id, updatedFields);  // Edit the note
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note))) // Update the notes state with the updated note
    } catch (error) {
      console.error('Error editing note:', error);
    }
  }

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id) // Delete the note
      setNotes(notes.filter((note) => note.id !== id)) // Update the notes state by filtering out the deleted note
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  return {
    notes, newNote, newSubject, setNewNote, setNewSubject,
    addNote: handleAddNote,
    editNote: handleEditNote,
    deleteNote: handleDeleteNote,
  }
}

export default useNotes;