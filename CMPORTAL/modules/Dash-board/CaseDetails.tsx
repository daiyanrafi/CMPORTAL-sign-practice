// CaseDetails.tsx
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CaseDetails: React.FC = () => {
  // Replace these with your actual case details
  const caseDetails = {
    caseNumber: 2023010005,
    createDate: new Date().toLocaleString(),
    dateLastModified: new Date().toLocaleString(),
    caseTitle: 'SharePoint Drag and Drop is not working in Document Libraries.',
    description: 'We trying to Drag and Drop document in SharePoint Library. It works fine for some user and not for others. We have noticed this issue recently. We are not sure if was working earlier.',
    status: 'In Progress'
  };

  return (
    <Box p={2}>
      <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
        Case Details
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Case Number:</strong> {caseDetails.caseNumber}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', textAlign: 'left' }}>
          <strong>Create Date:</strong> {caseDetails.createDate.toString()}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Date Last Modified:</strong> {caseDetails.dateLastModified}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Description:</strong>
          <br />
          {caseDetails.description}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Status:</strong>
          <span style={{ backgroundColor: caseDetails.status === 'In Progress' ? '#4CAF50' : 'transparent', color: caseDetails.status === 'In Progress' ? '#fff' : 'inherit', padding: '4px', borderRadius: '4px', wordSpacing: '10px' }}>
            {caseDetails.status}
          </span>
        </Typography>

        <div style={{ textAlign: 'left' }}>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => { /* Handle View Details click */ }}
            style={{
              fontSize: 'medium',
              fontFamily: 'Calibri',
              backgroundColor: 'white',
              color: '#00A4EF',
              // borderRadius: '0',
              // marginBottom: '16px',
              marginRight: '10px',
              marginTop: '30px',
              padding: '2px 4px',
              border: 'none'
            }}
          >
            View Details
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default CaseDetails;
