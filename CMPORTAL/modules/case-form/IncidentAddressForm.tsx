/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

type IncidentAddressFormProps = {
  incident_address: string;
  incident_address1: string;
  incident_city: string;
  incident_postcode: string;
  incident_state: string;
  updateFields: (fields: Partial<{
    incident_address: string;
    incident_address1: string;
    incident_city: string;
    incident_postcode: string;
    incident_state: string;
  }>) => void;
  viewMode: boolean;
};

export function IncidentAddressForm({
  incident_address,
  incident_address1,
  incident_city,
  incident_postcode,
  incident_state,
  updateFields,
  viewMode,//
}: IncidentAddressFormProps) {

  const inputProps = {
    style: { fontSize: 'large', fontFamily: 'Calibri' },
    disabled: viewMode, // Disable input fields in view mode
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '25px', fontFamily: 'Calibri' }}>
        Incident Address
      </Typography>

      <Typography style={{ marginTop: '10px', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '18px' }}>The incident address is the address where your supply is located and may be different to your postal address</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Address</span>}
            required
            value={incident_address}
            onChange={(e) => updateFields({ incident_address: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Address 1</span>}
            value={incident_address1}
            onChange={(e) => updateFields({ incident_address1: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>City</span>}
            required
            value={incident_city}
            onChange={(e) => updateFields({ incident_city: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Postcode</span>}
            required
            value={incident_postcode}
            onChange={(e) => updateFields({ incident_postcode: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>State</span>}
            required
            value={incident_state}
            onChange={(e) => updateFields({ incident_state: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>
      </Grid>
    </div>
  );
}
