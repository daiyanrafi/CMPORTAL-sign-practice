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
      <Typography variant="h4" style={{ borderBottom: '2px solid #2196F3', paddingBottom: '8px', backgroundColor: '#2196F3', color: '#fff' }}>
        Case Details
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" style={{ marginBottom: '8px', textAlign: 'left' }}>
          <strong>Case ID:</strong> {caseDetails.caseId}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '8px', textAlign: 'left' }}>
          <strong>Case Title:</strong> {caseDetails.caseTitle}
        </Typography>
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          <strong>Date:</strong> {caseDetails.createDate.toString()}
        </Typography>
        {/* Add more fields or customize as needed */}
      </Box>
    </Box>
  );
};

export default CaseDetails;
