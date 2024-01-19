// FileSection.tsx

import React, { useState } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, TextField, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Update the type for a single note
interface Note {
  id: number;
  note: string;
  uploadDate: string;
}

interface FileSectionProps {
  onAddNote: (note: string) => void; // Prop to handle adding a note
  uploadedNotes: Note[]; // Prop to receive uploaded notes
}

const FileSection: React.FC<FileSectionProps> = ({ onAddNote, uploadedNotes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNote, setNewNote] = useState<string>('');

  // Handle adding a new note
  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      onAddNote(newNote);
      setNewNote('');
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={2}>
      {/* File section title */}
      <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'left', paddingLeft: '20px', marginLeft: '-2px' }}>
        Notes
      </Typography>

      {/* Add Note button */}
      <div style={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          onClick={openModal}
          style={{
            fontFamily: 'Calibri',
            backgroundColor: '#F25022',
            color: 'white',
            fontSize: 'large',
            borderRadius: '0',
            marginBottom: '16px',
            marginRight: '10px',
          }}
        >
          <AddCircleOutlineIcon style={{ marginRight: '5px' }} />
          ADD NOTE
        </Button>
      </div>


      {/* Modal */}
      <Modal open={isModalOpen} onClose={closeModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" id="modal-title" component="div" style={{ fontFamily: 'Calibri', fontSize: '20px', marginBottom: '10px' }}>
            Add a Note
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Button onClick={handleAddNote} variant="contained" style={{ marginTop: '10px', fontFamily: 'Calibri', fontSize: 'large', borderRadius: '0', }}>
            SAVE
          </Button>
        </Box>
      </Modal>

      {/* Table to display uploaded notes */}
      <TableContainer component={Paper} style={{ backgroundColor: '#fff', maxHeight: '300px', overflowY: 'auto' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#f2f2f2', position: 'sticky', top: 0 }}>
            <TableRow>
              <TableCell style={{ fontSize: 'large', fontFamily: 'Calibri', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell style={{ fontSize: 'large', fontFamily: 'Calibri', fontWeight: 'bold' }}>Date Created</TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
            {uploadedNotes.map((note) => (
              <TableRow key={note.id}>
                <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{note.note}</TableCell>
                <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{note.uploadDate.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FileSection;
