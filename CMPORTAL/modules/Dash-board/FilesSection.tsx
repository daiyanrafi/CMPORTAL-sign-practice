// FilesSection.tsx
import React, { useState } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface FilesSectionProps {
  onFileUpload: (file: File) => void;
  uploadedFiles: any[]; // Replace 'any' with a proper type for your file structure
}

const FilesSection: React.FC<FilesSectionProps> = ({ onFileUpload, uploadedFiles }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <Box p={2} >
      <Typography variant="h4" style={{ borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#2196F3', color: '#fff', marginBottom: '16px' }}>
      Files
      </Typography>
      <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '8px', color: '#fff' }}>
        <Button variant="contained" component="label" style={{ backgroundColor: '#fff', color: '#3F51B5', marginBottom: '16px' }}>
          Upload
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
        </Button>
      </label>
      <TableContainer component={Paper} style={{ backgroundColor: '#fff' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>File Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Upload Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
