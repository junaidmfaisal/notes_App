import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';

const NoteList = ({ notes, editNote, deleteNote }) => {
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  const handleEditToggle = (id) => {
    setEditId(editId === id ? null : id);
  };

  const handleShow = (note) => {
    setCurrentNote(note);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="note-list">
      {notes.map(note => (
        <Card key={note.id} className="mb-3 bg-secondary text-white">
          <Card.Body>
            {editId === note.id ? (
              <>
                <Form.Group className="mb-2">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    value={note.subject}
                    onChange={(e) => editNote(note.id, 'subject', e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={note.text}
                    onChange={(e) => editNote(note.id, 'text', e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" onClick={() => handleEditToggle(note.id)} className="me-2">
                  Save
                </Button>
              </>
            ) : (
              <>
                <Card.Title>{note.subject}</Card.Title>
                <Button variant="info" onClick={() => handleShow(note)} className="me-2">
                  View
                </Button>
                <Button variant="info" onClick={() => handleEditToggle(note.id)} className="me-2">
                  Edit
                </Button>
              </>
            )}
            <Button variant="danger" onClick={() => deleteNote(note.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentNote.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{currentNote.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NoteList;