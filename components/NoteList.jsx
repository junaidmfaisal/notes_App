import React, { useState } from 'react'
import { Modal, Button, Card, Form } from 'react-bootstrap'

const NoteList = ({ notes, editNote, deleteNote }) => {
  const [show, setShow] = useState(false) // Show modal
  const [editMode, setEditMode] = useState(false) // Edit mode
  const [currentNote, setCurrentNote] = useState(null)  // Current note being viewed
  const [updatedSubject, setUpdatedSubject] = useState('')  // Updated subject
  const [updatedText, setUpdatedText] = useState('')  // Updated text

  const handleView = (note) => {
    setCurrentNote(note); // Set current note
    setUpdatedSubject(note.subject);  // Set edit fields
    setUpdatedText(note.text);  // Set edit fields
    setShow(true);  // Show modal
    setEditMode(false); // Disable edit mode
  }

  const handleEdit = () => {
    setEditMode(true); // Enable edit mode
  };

  const handleSaveEdit = async () => {
    if (updatedSubject.trim() === '' || updatedText.trim() === '') {  // Validate input
      alert('Subject and Note cannot be empty.');
      return;
    }
    await editNote(currentNote.id, { subject: updatedSubject, text: updatedText }); // Edit note
    setShow(false); // Close modal
    setEditMode(false); // Disable edit mode
  }

  const handleClose = () => {
    setShow(false); // Close modal
    setEditMode(false); // Disable edit mode
    setUpdatedSubject(''); // Clear edit fields
    setUpdatedText(''); // Clear edit fields
  }

  return (
    <div className="d-flex flex-column gap-3">
      {notes.map((note) => (
        <Card key={note.id} bg="dark" text="light" className="shadow">
          <Card.Body>
            <Card.Title className='d-flex justify-content-center'>{note.subject}</Card.Title>
            <div className="d-flex justify-content-between">
              <Button variant="info" onClick={() => handleView(note)}>View</Button>
              <Button variant="danger" onClick={() => deleteNote(note.id)}>Delete</Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Note' : currentNote?.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            editMode ? (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" value={updatedSubject} placeholder="Enter updated subject"
                    onChange={(e) => setUpdatedSubject(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={3} value={updatedText} placeholder="Enter updated note"
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                </Form.Group>
              </Form>
            )
              :
              (
                <p>{currentNote?.text}</p>
              )
          }
        </Modal.Body>
        <Modal.Footer>
          {
            editMode ? (
              <>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="success" onClick={handleSaveEdit}>Save</Button>
              </>
            )
            :
            (
              <>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleEdit}>Edit</Button>
              </>
            )
          }
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default NoteList;
