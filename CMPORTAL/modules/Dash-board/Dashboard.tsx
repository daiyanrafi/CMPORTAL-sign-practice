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
  
  // const handleFileUploadForFilesSection = (file: any) => {
  //   const newFile = {
  //     id: uploadedFiles.length + 1,
  //     name: file.name,
  //     uploadDate: new Date(),
  //   };

  //   setUploadedFiles([...uploadedFiles, newFile]);
  //   console.log('Uploaded Files:', uploadedFiles);
  // };

  const handleFileUploadForFilesSection = (file: any) => {
    const newFile = {
      id: uploadedFiles.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };
  
    setUploadedFiles(prevFiles => [...prevFiles, newFile]);
    // Use the callback function to log the updated state
    setUploadedFiles(prevFiles => {
      console.log('Uploaded Files:', prevFiles);
      return prevFiles;
    });
  };

  // Function to handle file upload for NoteSection

  // const handleFileUploadForNoteSection = (file: any) => {
  //   const newFile = {
  //     id: uploadedFilesForNotes.length + 1,
  //     name: file.name,
  //     uploadDate: new Date(),
  //   };

  //   setUploadedFilesForNotes([...uploadedFilesForNotes, newFile]);
  //   console.log('Uploaded Files for Notes:', uploadedFilesForNotes);
  // };

  const handleFileUploadForNoteSection = (file: any) => {
    const newFile = {
      id: uploadedFilesForNotes.length + 1,
      name: file.name,
      uploadDate: new Date(),
    };
  
    setUploadedFilesForNotes(prevFiles => [...prevFiles, newFile]);
    // Use the callback function to log the updated state
    setUploadedFilesForNotes(prevFiles => {
      console.log('Uploaded Files for Notes:', prevFiles);
      return prevFiles;
    });
  };

  // Function to handle adding a new note
  // const handleAddNote = (note: string) => {
  //   setNotes([...notes, note]);
  // };

  return (
    <Container
      component="main"
      maxWidth={false}
      style={{ minHeight: '90vh', padding: '40px', border: '2px solid #eb3446' }}>
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
          <Paper style={{ marginTop: '40px' }}>
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
