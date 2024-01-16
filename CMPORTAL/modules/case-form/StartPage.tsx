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
  onEdit: (index: number) => void;
  onView: (index: number) => void;
  userDataList: FormData[];
};

const StartPage: React.FC<StartPageProps> = ({ onNext, onEdit, onView, userDataList }) => {
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
            <TableRow style={{ backgroundColor: '#56c8f5' }}>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>User Title</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>User First Name</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>User Last Name</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>User Country</TableCell>
              <TableCell style={{ fontSize: '18px', fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: '#fafeff', borderBottom: '2px solid #333' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_title}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_firstName}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_lastName}</TableCell>
                <TableCell style={{ fontSize: '15px', color: '#333' }}>{userData.user_country}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => onEdit(index)} style={{ fontSize: '13px', fontFamily: 'Arial', color: '#fff', backgroundColor: '#007bff', marginRight: '8px' }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="success" onClick={() => onView(index)} style={{ fontSize: '13px', fontFamily: 'Arial', color: '#fff', backgroundColor: '#28a745' }}>
                    View
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
