import React from 'react'
import { Form, Button } from 'react-bootstrap'

const NoteInput = ({ newNote, newSubject, setNewNote, setNewSubject, addNote }) => (
  <div className="p-4 bg-secondary rounded shadow">
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" value={newSubject} placeholder="Enter subject"
          onChange={(e) => setNewSubject(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" rows={3} value={newNote}
          onChange={(e) => setNewNote(e.target.value)} placeholder="Write your note"
        />
      </Form.Group>
      <Button variant="primary" onClick={addNote} className="w-100">Add Note</Button>
    </Form>
  </div>
)

export default NoteInput