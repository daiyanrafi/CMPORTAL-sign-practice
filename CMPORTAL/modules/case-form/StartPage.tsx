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
};

const StartPage: React.FC<StartPageProps> = ({ onNext, userDataList }) => {
  const handleNext = () => {
    onNext();
  };

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
          <Typography variant="h5" style={{ fontSize: '25px', fontWeight: '600', color: '#333', fontFamily: 'Georgia, serif', textDecoration: 'underline' }}>User Data Table</Typography>
          <Button variant="contained" color="primary" onClick={handleNext} style={{ fontSize: '13px', fontFamily: 'Arial', color: '#fff', backgroundColor: '#007bff' }}>
            Add New Cases
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#daf0a8' }}>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#555', borderBottom: '2px solid #333' }}>User Title</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#555', borderBottom: '2px solid #333' }}>User First Name</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#555', borderBottom: '2px solid #333' }}>User Last Name</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#555', borderBottom: '2px solid #333' }}>User Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_title}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_firstName}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_lastName}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default StartPage;
