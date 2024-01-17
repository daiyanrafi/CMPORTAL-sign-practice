/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

type ComplaintContProps = {
  complaint_cont_concession: string;
  complaint_cont_concessionTypes: string[];
  complaint_cont_complaintDescription: string;
  complaint_cont_agree: boolean;
  complaint_cont_treeIdentification: string;
  updateFields: (fields: Partial<{
    complaint_cont_concession: string;
    complaint_cont_concessionTypes: string[];
    complaint_cont_complaintDescription: string;
    complaint_cont_agree: boolean;
    complaint_cont_treeIdentification: string;
  }>) => void;
  viewMode: boolean;
};

export function ComplaintCont({
  complaint_cont_concession,
  complaint_cont_concessionTypes,
  complaint_cont_complaintDescription,
  complaint_cont_agree,
  complaint_cont_treeIdentification,
  updateFields,
  viewMode,//
}: ComplaintContProps) {

  const inputProps = {
    style: { fontSize: 'large', fontFamily: 'Calibri' },
    disabled: viewMode, // Disable input fields in view mode
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '25px' }}>
        Complaint (Continued)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={15}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', marginTop: '10px', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Do you currently have a concession card? If so, which one?
          </Typography>
          <TextField
            fullWidth
            required
            select
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Please Select</span>}
            value={complaint_cont_concession}
            onChange={(e) => updateFields({ complaint_cont_concession: e.target.value })}
            InputProps={inputProps}
          >
            <MenuItem value="Yes" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Yes</MenuItem>
            <MenuItem value="No" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>No</MenuItem>
          </TextField>
        </Grid>

        <Grid container spacing={1} style={{ marginLeft: '10px' }}>
          <Grid item xs={15}>
            <Typography variant="body1" gutterBottom style={{ color: 'Blue', marginTop: '16px', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '12px' }}>
              Concession Type:
            </Typography>
          </Grid>
          <Grid item xs={6} justifyContent="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('a')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('a')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'a')
                      : [...complaint_cont_concessionTypes, 'a'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={<Typography
                variant="body1"
                style={{
                  fontStyle: 'italic',
                  fontSize: '13px',
                  fontFamily: 'Calibri'
                }}
              >
                Austudy or Abstudy
              </Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('b')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('b')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'b')
                      : [...complaint_cont_concessionTypes, 'b'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Centrelink Health Care Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('c')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('c')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'c')
                      : [...complaint_cont_concessionTypes, 'c'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Commonwealth Seniors Health Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('d')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('d')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'd')
                      : [...complaint_cont_concessionTypes, 'd'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Full-Time Student Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('e')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('e')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'e')
                      : [...complaint_cont_concessionTypes, 'e'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Low-Income Earner
                </Typography>
              }
            />
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={complaint_cont_concessionTypes.includes('k')}
                    onChange={() => {
                      const updatedTypes = complaint_cont_concessionTypes.includes('k')
                        ? complaint_cont_concessionTypes.filter((type) => type !== 'k')
                        : [...complaint_cont_concessionTypes, 'k'];
                      updateFields({ complaint_cont_concessionTypes: updatedTypes });
                    }}
                    disabled={viewMode}  //add this line to desable
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    style={{
                      fontStyle: 'italic',
                      fontSize: '13px',
                      fontFamily: 'Calibri'
                    }}
                  >
                    Others
                  </Typography>
                }
              />
            </div>
          </Grid>
          <Grid item xs={6} justifyContent="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('g')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('g')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'g')
                      : [...complaint_cont_concessionTypes, 'g'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Residential Parks Resident
                </Typography>
              }
            />
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={complaint_cont_concessionTypes.includes('h')}
                    onChange={() => {
                      const updatedTypes = complaint_cont_concessionTypes.includes('h')
                        ? complaint_cont_concessionTypes.filter((type) => type !== 'h')
                        : [...complaint_cont_concessionTypes, 'h'];
                      updateFields({ complaint_cont_concessionTypes: updatedTypes });
                    }}
                    disabled={viewMode}  //add this line to desable
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    style={{
                      fontStyle: 'italic',
                      fontSize: '13px',
                      fontFamily: 'Calibri'
                    }}
                  >
                    Seniors Card
                  </Typography>
                }
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('f')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('f')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'f')
                      : [...complaint_cont_concessionTypes, 'f'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Pensioner Concession Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('i')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('i')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'i')
                      : [...complaint_cont_concessionTypes, 'i'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Transport Concession Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('j')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('j')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'j')
                      : [...complaint_cont_concessionTypes, 'j'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
                  }}
                  disabled={viewMode}  //add this line to desable
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    fontFamily: 'Calibri'
                  }}
                >
                  Department of Veterans Affairs Card (DVA Card)
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={15}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Is there anything about you or your personal circumstances that we need to consider, that will help us with your complaint?
          </Typography>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Please write here.</span>}
            required
            multiline
            value={complaint_cont_complaintDescription}
            onChange={(e) => updateFields({ complaint_cont_complaintDescription: e.target.value })}
            InputProps={inputProps}
          />
        </Grid>

        <Grid item xs={15} style={{ marginTop: '10px', fontFamily: 'Calibri' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={complaint_cont_agree}
                onChange={() => updateFields({ complaint_cont_agree: !complaint_cont_agree })}
              />
            }
            label={
              <Typography variant="body1" style={{ fontSize: '12px', fontFamily: 'Calibri' }}>
                I agree for this information to be shared with relevant parties to assist with this complaint.
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={15}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Calibri', fontSize: '14px', marginBottom: '16px' }}>
            Do you identify as an Aboriginal ot Torres Straait Islander person?
          </Typography>
          <TextField
            fullWidth
            select
            required
            label={<span style={{ fontSize: 'large', fontFamily: 'Calibri' }}>Please Select</span>}
            value={complaint_cont_treeIdentification}
            onChange={(e) => updateFields({ complaint_cont_treeIdentification: e.target.value })}
            InputProps={inputProps}
          >
            <MenuItem value="Yes" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>Yes</MenuItem>
            <MenuItem value="No" style={{ fontSize: '15px', fontFamily: 'Calibri' }}>No</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}
