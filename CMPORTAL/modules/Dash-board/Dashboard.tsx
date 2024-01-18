// Dashboard.tsx
import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import CaseDetails from './CaseDetails';
import FilesSection from './FilesSection';
import NoteSection from './NoteSection';

const Dashboard: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]); // Replace 'any' with a proper type for your file structure
  const [notes, setNotes] = useState<string[]>([]);

  const handleFileUpload = (file: any) => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };

    setUploadedFiles([...uploadedFiles, newFile]);
  };

  const handleAddNote = (note: string) => {
    setNotes([...notes, note]);
  };

  return (
    <Container style={{ height: '100vh' }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <CaseDetails />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <FilesSection
              onFileUpload={handleFileUpload}
              uploadedFiles={uploadedFiles}
            />
          </Paper>
          <Paper>
            <NoteSection
              onAddNote={handleAddNote}
              notes={notes}
              onFileUpload={handleFileUpload}
              uploadedFiles={uploadedFiles}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
