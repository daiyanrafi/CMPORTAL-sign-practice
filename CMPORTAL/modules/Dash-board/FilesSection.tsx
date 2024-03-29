// FilesSection.tsx
import React, { useState } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';

interface FilesSectionProps {
  onFileUpload: (file: File) => void;
  uploadedFiles: any[]; // Replace 'any' with a proper type for your file structure
}

const FilesSection: React.FC<FilesSectionProps> = ({ onFileUpload, uploadedFiles }) => {
  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Call the onFileUpload prop to handle file upload
      onFileUpload(file);
    }
  };

  return (
    <Box p={2} >
      {/* Section title */}
      {/* <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
        Files
      </Typography> */}
      <Typography
        variant="h4"
        style={{
          // ... other styles
          fontFamily: 'Calibri',
          borderBottom: '2px solid #2196F3',
          paddingBottom: '8px',
          backgroundColor: '#00A4EF',
          color: '#fff',
          marginBottom: '16px',
          textAlign: 'left',
          position: 'relative',
          padding: '25px',  // Adjust as needed
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',  // Adjust as needed
          }}
        >
          Files
        </span>
      </Typography>
      {/* <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '8px', color: '#fff' }}>
        <Button variant="contained" component="label" style={{ fontFamily: 'Calibri', backgroundColor: '#F25022', color: 'white', borderRadius: '0', marginBottom: '16px' }}>
          UPLOAD FILE
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
        </Button>
      </label> */}

      {/* File upload button */}
      <div style={{ textAlign: 'right' }}>
        <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '8px', color: '#fff' }}>
          <Button
            variant="contained"
            component="label"
            style={{
              fontSize: 'medium',
              fontFamily: 'Calibri',
              backgroundColor: 'white',
              color: '#00A4EF',
              borderRadius: '0',
              marginBottom: '16px',
              // marginRight: '10px',
              padding: '2px 4px',
              boxShadow: 'none'
            }}
          >
            <PublishIcon style={{ marginRight: '4px' }} />
            UPLOAD FILE
            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
          </Button>
        </label>
      </div>
      {/* Table to display uploaded files */}
      <TableContainer component={Paper} style={{ backgroundColor: '#fff', maxHeight: '300px', overflowY: 'auto' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#f2f2f2', position: 'sticky', top: 0 }}>
            <TableRow>
              <TableCell style={{ fontSize: 'large', fontFamily: 'Calibri', fontWeight: 'bold' }}>File Name</TableCell>
              <TableCell style={{ fontSize: 'large', fontFamily: 'Calibri', fontWeight: 'bold', textAlign: 'right' }}>Date and Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapping through uploadedFiles to display each file */}
            {uploadedFiles.map((file) => (
              <TableRow key={file.id}>
                <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{file.name}</TableCell>
                <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri', textAlign: 'right' }}>{file.uploadDate.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FilesSection;
