import axios from 'axios'

const API_URL = 'http://localhost:3000/notes' // API URL

export const fetchNotes = async () => {
  const response = await axios.get(API_URL); // Fetch notes from the server
  return response.data  // Return the fetched data
};

export const addNote = async (subject, text) => { // Add a new note
  const response = await axios.post(API_URL, { subject, text }) // Post the new note to the server
  return response.data // Return the new note
};

export const editNote = async (id, updatedFields) => { // Edit a note
  const response = await axios.put(`${API_URL}/${id}`, updatedFields) // Put the updated note to the server
  return response.data      // Return the updated note
};

export const deleteNote = async (id) => { // Delete a note
  await axios.delete(`${API_URL}/${id}`) // Delete the note
  return id // Return the deleted note ID
};
