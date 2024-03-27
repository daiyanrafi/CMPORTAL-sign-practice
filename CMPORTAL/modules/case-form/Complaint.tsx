/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid, MenuItem } from '@mui/material';

type ComplaintFormProps = {
  complaint_supplier: string;
  complaint_service: string;
  complaint_accountNumber: string;
  complaint_complaintDescription: string;
  complaint_resolutionDescription: string;
  updateFields: (fields: Partial<{
    complaint_supplier: string;
    complaint_service: string;
    complaint_accountNumber: string;
    complaint_complaintDescription: string;
    complaint_resolutionDescription: string;
  }>) => void;
  viewMode: boolean;
  suppliersData: { supplier: string }[];
  serviceData: { service: string }[];
};

export function ComplaintForm({
  complaint_supplier,
  complaint_service,
  complaint_accountNumber,
  complaint_complaintDescription,
  complaint_resolutionDescription,
  updateFields,
  viewMode,
  suppliersData,
  serviceData
}: ComplaintFormProps) {

  const inputProps = {
    style: { fontSize: 'large', fontFamily: 'Calibri' },
    disabled: viewMode, // Disable input fields in view mode
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '25px', fontFamily: 'Calibri' }}>
        Complaint Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Name of supplier you wish to complain about
          </Typography>
          <TextField
            fullWidth
            autoFocus
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Select Supplier</span>}
            required
            select
            value={complaint_supplier}
            onChange={(e) => updateFields({ complaint_supplier: e.target.value })}
            InputProps={inputProps}
          >
            {/* <MenuItem value="a" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option A</MenuItem>
            <MenuItem value="b" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option B</MenuItem>
            <MenuItem value="c" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option C</MenuItem> */}
           {suppliersData.map((supplier, index) => (
            <MenuItem key={index} value={supplier.supplier} style={{ fontSize: '15px', fontFamily: 'Calibri' }}>{supplier.supplier}</MenuItem>
          ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            What services is the complaint about
          </Typography>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Select Services</span>}
            required
            select
            value={complaint_service}
            onChange={(e) => updateFields({ complaint_service: e.target.value })}
            InputProps={inputProps}
          >
            {/* <MenuItem value="x" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option X</MenuItem>
            <MenuItem value="y" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option Y</MenuItem>
            <MenuItem value="z" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Option Z</MenuItem> */}
           {serviceData.map((service, index) => (
            <MenuItem key={index} value={service.service} style={{ fontSize: '15px', fontFamily: 'Calibri' }}>{service.service}</MenuItem>
          ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Account Number (If applicable)
          </Typography>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Account Number</span>}
            value={complaint_accountNumber}
            onChange={(e) => updateFields({ complaint_accountNumber: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Please brief describe the complaint including on outline of any responses the provider has given so far
          </Typography>
          <TextField
            fullWidth
            required
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Please write here...</span>}
            multiline
            rows={4}
            value={complaint_complaintDescription}
            onChange={(e) => updateFields({ complaint_complaintDescription: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            What are you or the customer seeking to resolve this complaint?
          </Typography>
          <TextField
            fullWidth
            required
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Please write here...</span>}
            multiline
            rows={4}
            value={complaint_resolutionDescription}
            onChange={(e) => updateFields({ complaint_resolutionDescription: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
      </Grid>
    </div>
  );
}
