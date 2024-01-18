// Dashboard.tsx
import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import CaseDetails from './CaseDetails';
import FilesSection from './FilesSection';
import NoteSection from './NoteSection';

const Dashboard: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]); // Replace 'any' with a proper type for your file structure
  const [uploadedFilesForNotes, setUploadedFilesForNotes] = useState<any[]>([]);
  const [notes, setNotes] = useState<string[]>([]);

  const handleFileUploadForFilesSection = (file: any) => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };

    setUploadedFiles([...uploadedFiles, newFile]);
  };

  const handleFileUploadForNoteSection = (file: any) => {
    const newFile = {
      id: uploadedFilesForNotes.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };

    setUploadedFilesForNotes([...uploadedFilesForNotes, newFile]);
  };

  const handleAddNote = (note: string) => {
    setNotes([...notes, note]);
  };

  return (
    <Container 
    component="main"
    maxWidth={false}
    style={{ minHeight: '90vh', backgroundColor: '#d7e3f5', padding: '40px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
          <Paper>
            <CaseDetails />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
          <Paper>
            <FilesSection
              onFileUpload={handleFileUploadForFilesSection}
              uploadedFiles={uploadedFiles}
            />
          </Paper>
          <Paper style={{ marginTop: '20px' }}>
            <NoteSection
              onAddNote={handleAddNote}
              notes={notes}
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
