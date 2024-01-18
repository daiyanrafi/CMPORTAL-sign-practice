// FilesSection.tsx
import React, { useState } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
      <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'left', paddingLeft: '20px', marginLeft: '-2px' }}>
        Files
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
              fontSize: 'large', 
              fontFamily: 'Calibri',
              backgroundColor: '#F25022',
              color: 'white',
              borderRadius: '0',
              marginBottom: '16px',
              marginRight: '10px'
            }}
          >
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
              <TableCell style={{ fontSize: 'large', fontFamily: 'Calibri', fontWeight: 'bold' }}>Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapping through uploadedFiles to display each file */}
            {uploadedFiles.map((file) => (
              <TableRow key={file.id}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.uploadDate.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FilesSection;
