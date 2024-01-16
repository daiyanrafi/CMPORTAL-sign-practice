// StartPage.tsx

import React from 'react';
import {
  Typography,
  Paper,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
} from '@mui/material';
import { FormData } from './types';

type StartPageProps = {
  onNext: () => void;
  userDataList: FormData[];
  onEdit: (index: number) => void;
};

const StartPage: React.FC<StartPageProps> = ({ onNext, userDataList, onEdit }) => {
  const handleNext = () => {
    onNext();
  };

  //--for status color started--
  const getStatusByIndex = (index: number): string => {
    const statuses = ['active', 'inactive', 'pending'];
    return statuses[index % statuses.length];
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#28a745';
      case 'inactive':
        return '#dc3545';
      case 'pending':
        return '#ffc107';
      default:
        return '#333';
    }
  };
  //--for status color ended--

  //**for created date started**
  const getFormattedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  //**created date ended**

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        marginTop: '40px',
      }}
    >
      <Paper elevation={3} style={{ padding: '2rem', width: '80%' }}>
        <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" style={{ fontSize: '25px', fontWeight: '600', color: '#333', fontFamily: 'Georgia, serif', textDecoration: 'underline' }}>MY CASES</Typography>
          <Button variant="contained" color="primary" onClick={handleNext} style={{ fontSize: '13px', fontFamily: 'Arial', color: '#fff', backgroundColor: '#007bff' }}>
            Add New Cases
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#56c8f5' }}>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>Case ID</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>User Title</TableCell>

              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>Status</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>Created Date</TableCell>

              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{202401160001 + index}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.complaint_resolutionDescription}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{getFormattedDate(new Date())}</TableCell>
                <TableCell style={{ fontSize: '15px', color: getStatusColor(getStatusByIndex(index)) }}>{getStatusByIndex(index)}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => onEdit(index)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default StartPage;
