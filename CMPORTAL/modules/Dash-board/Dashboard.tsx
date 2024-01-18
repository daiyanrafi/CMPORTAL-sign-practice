// Dashboard.tsx
import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import CaseDetails from './CaseDetails';
import FilesSection from './FilesSection';
import NoteSection from './NoteSection';

const Dashboard: React.FC = () => {
  // State to track uploaded files and notes
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]); // Replace 'any' with a proper type for your structure
  const [uploadedFilesForNotes, setUploadedFilesForNotes] = useState<any[]>([]);
  // const [notes, setNotes] = useState<string[]>([]);

  // Function to handle file upload for FilesSection
  const handleFileUploadForFilesSection = (file: any) => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };

    setUploadedFiles([...uploadedFiles, newFile]);
  };

  // Function to handle file upload for NoteSection
  const handleFileUploadForNoteSection = (file: any) => {
    const newFile = {
      id: uploadedFilesForNotes.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };

    setUploadedFilesForNotes([...uploadedFilesForNotes, newFile]);
  };

  // Function to handle adding a new note
  // const handleAddNote = (note: string) => {
  //   setNotes([...notes, note]);
  // };

  return (
    <Container
      component="main"
      maxWidth={false}
      style={{ minHeight: '90vh', backgroundColor: '#d7e3f5', padding: '40px' }}>
      <Grid container spacing={3}>
        {/* CaseDetails component */}
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
          <Paper>
            <CaseDetails />
          </Paper>
        </Grid>
        {/* FilesSection and NoteSection components */}
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
          <Paper>
            {/* FilesSection component */}
            <FilesSection
              onFileUpload={handleFileUploadForFilesSection}
              uploadedFiles={uploadedFiles}
            />
          </Paper>
          <Paper style={{ marginTop: '20px' }}>
            {/* NoteSection component */}
            <NoteSection
              // onAddNote={handleAddNote}
              // notes={notes}
              onFileUpload={handleFileUploadForNoteSection}
              uploadedFiles={uploadedFilesForNotes}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
