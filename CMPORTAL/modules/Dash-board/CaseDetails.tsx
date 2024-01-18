// CaseDetails.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const CaseDetails: React.FC = () => {
  // Replace these with your actual case details
  const caseDetails = {
    caseId: '123',
    caseTitle: 'Sample Case',
    createDate: new Date(),
  };

  return (
    <Box p={2}>
      <Typography variant="h4" style={{ fontFamily: 'Calibri', borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#00A4EF', color: '#fff', marginBottom: '16px', textAlign: 'left', paddingLeft: '20px', marginLeft: '-2px' }}>
        Case Details
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Case ID:</strong> {caseDetails.caseId}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', marginBottom: '8px', textAlign: 'left' }}>
          <strong>Case Title:</strong> {caseDetails.caseTitle}
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'large', fontFamily: 'Calibri', textAlign: 'left' }}>
          <strong>Date:</strong> {caseDetails.createDate.toString()}
        </Typography>
        {/* Add more fields or customize as needed */}
      </Box>
    </Box>
  );
};

export default CaseDetails;
