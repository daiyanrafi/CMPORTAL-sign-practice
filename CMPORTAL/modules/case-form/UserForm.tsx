/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type UserFormProps = {
  user_title: string;
  user_firstName: string;
  user_lastName: string;
  user_postalAddress: string;
  user_address: string;
  user_suburb: string;
  user_postcode: string;
  user_state: string;
  user_country: string;
  user_preferredContact: string;
  user_landline: string;
  user_mobile: string;
  user_email: string;
  updateFields: (fields: Partial<{
    user_title: string;
    user_firstName: string;
    user_lastName: string;
    user_postalAddress: string;
    user_address: string;
    user_suburb: string;
    user_postcode: string;
    user_state: string;
    user_country: string;
    user_preferredContact: string;
    user_landline: string;
    user_mobile: string;
    user_email: string;
  }>) => void;
  viewMode: boolean;
};

export function UserForm({
  user_title,
  user_firstName,
  user_lastName,
  user_postalAddress,
  user_address,
  user_suburb,
  user_postcode,
  user_state,
  user_country,
  user_preferredContact,
  user_landline,
  user_mobile,
  user_email,
  updateFields,
  viewMode,//
}: UserFormProps) {

  const inputProps = {
    style: { fontSize: 'large', fontFamily: 'Calibri' },
    disabled: viewMode, // Disable input fields in view mode
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '25px', fontFamily: 'Calibri' }}>
        Your Details
      </Typography>

      <Typography style={{ marginTop: '10px', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '18px' }}>The information you provide will be forwarded to the energy or water supplier that you are complaining about any other relevant party that may assist us with your complaint.</Typography>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            fullWidth
            select
            required
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Title</span>}
            value={user_title}
            onChange={(e) => updateFields({ user_title: e.target.value })}
            InputProps={inputProps} // Added this line
          >
            <MenuItem value="Mr" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Mr</MenuItem>
            <MenuItem value="Mrs" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Mrs</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>First Name</span>}
            required
            type="text"
            value={user_firstName}
            onChange={(e) => updateFields({ user_firstName: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Last Name</span>}
            required
            type="text"
            value={user_lastName}
            onChange={(e) => updateFields({ user_lastName: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Postal Address</span>}
            required
            type="text"
            value={user_postalAddress}
            onChange={(e) => updateFields({ user_postalAddress: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Address</span>}
            required
            type="text"
            value={user_address}
            onChange={(e) => updateFields({ user_address: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Suburb</span>}
            required
            type="text"
            value={user_suburb}
            onChange={(e) => updateFields({ user_suburb: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Postcode</span>}
            required
            type="text"
            value={user_postcode}
            onChange={(e) => updateFields({ user_postcode: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>State</span>}
            required
            type="text"
            value={user_state}
            onChange={(e) => updateFields({ user_state: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Country</span>}
            required
            type="text"
            value={user_country}
            onChange={(e) => updateFields({ user_country: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="preferredContact"
            name="preferredContact"
            value={user_preferredContact}
            onChange={(e) => updateFields({ user_preferredContact: e.target.value })}
          >
            <FormControlLabel value="Landline" control={<Radio disabled={viewMode} />} label={<span style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Landline</span>} />
            <FormControlLabel value="Mobile" control={<Radio disabled={viewMode} />} label={<span style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Mobile</span>} />
          </RadioGroup>
        </Grid>
        {user_preferredContact === 'Landline' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Landline</span>}
              required
              type="text"
              value={user_landline}
              onChange={(e) => updateFields({ user_landline: e.target.value })}
              InputProps={inputProps} // Added this line
            />
          </Grid>
        )}
        {user_preferredContact === 'Mobile' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Mobile Phone</span>}
              required
              type="text"
              value={user_mobile}
              onChange={(e) => updateFields({ user_mobile: e.target.value })}
              InputProps={inputProps} // Added this line
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Email</span>}
            required
            type="email"
            value={user_email}
            onChange={(e) => updateFields({ user_email: e.target.value })}
            InputProps={inputProps} // Added this line
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ marginTop: '10px', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '18px' }}>We may need to call you if we need further information about your complaint. Please provide a daytime contact number so we can talk to you about this complaint.</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
