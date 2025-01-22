import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NoteInput = ({ newNote, newSubject, setNewNote, setNewSubject, addNote }) => {
  return (
    <div className="note-input mb-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label style={{color:'white'}}>Subject</Form.Label>
          <Form.Control
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            placeholder="Enter note subject"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{color:'white'}}>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your note"
          />
        </Form.Group>
        <Button variant="primary" onClick={addNote} className="w-100">
          Add Note
        </Button>
      </Form>
    </div>
  );
};

export default NoteInput;