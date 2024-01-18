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
      <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'left', paddingLeft: '20px', marginLeft: '-2px' }}>
        Files
      </Typography>
      {/* <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '8px', color: '#fff' }}>
        <Button variant="contained" component="label" style={{ fontFamily: 'Calibri', backgroundColor: '#F25022', color: 'white', borderRadius: '0', marginBottom: '16px' }}>
          UPLOAD FILE
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
        </Button>
      </label> */}

      <div style={{ textAlign: 'right' }}>
        <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '8px', color: '#fff' }}>
          <Button
            variant="contained"
            component="label"
            style={{
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


      <TableContainer component={Paper} style={{ backgroundColor: '#fff', maxHeight: '300px' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#f2f2f2' }}>
            <TableRow>
              <TableCell style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>File Name</TableCell>
              <TableCell style={{ fontFamily: 'Calibri', fontWeight: 'bold' }}>Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            <TableBody>
              {uploadedFiles.map((file) => (
                <TableRow key={file.id}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.uploadDate.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </div>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FilesSection;
