import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
  FormControl,
  FormLabel,
} from '@mui/material';
import { FormData } from './types';

type SelectionPageProps = {
  onNext: () => void;
};

const SelectionPage: React.FC<SelectionPageProps> = ({ onNext }) => {
  const [selectedOption1, setSelectedOption1] = useState<string | undefined>('');
  const [selectedOption2, setSelectedOption2] = useState<string | undefined>('');
  const [showWarning, setShowWarning] = useState(false);

  const handleChange1 = (value: string) => {
    setSelectedOption1(value);
    setShowWarning(value === 'yes1');
    setSelectedOption2(undefined);
  };

  const handleChange2 = (value: string) => {
    setSelectedOption2(value);
    setShowWarning(value === 'no2');
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div style={{ maxWidth: '600px', padding: '2rem', marginTop: '2rem' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '22px' }}>
        Questionnaire:
      </Typography>

      <div style={{ marginBottom: '2rem' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ fontSize: '15px', color: 'DodgerBlue' }}>Are you without electricity, gas, or water?</FormLabel>
          <RadioGroup
            aria-label="question1"
            name="question1"
            value={selectedOption1}
            onChange={(e) => handleChange1(e.target.value)}
          >
            <FormControlLabel value="yes1" control={<Radio />} label={<span style={{ fontSize: '15px' }}>Yes</span>} />
            <FormControlLabel value="no1" control={<Radio />} label={<span style={{ fontSize: '15px' }}>No</span>} />
          </RadioGroup>
          {showWarning && (
            <Typography color="error" variant="body2" style={{ fontSize: '13px' }}>
              Please contact your foreman at {selectedOption1 === 'yes1' ? '+376423926719' : '+00393946334'}
            </Typography>
          )}
        </FormControl>
      </div>

      {selectedOption1 === 'no1' && (
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ fontSize: '15px', color: 'DodgerBlue' }}>Have you contacted your provider to try to resolve your complaint?</FormLabel>
            <RadioGroup
              aria-label="question2"
              name="question2"
              value={selectedOption2}
              onChange={(e) => handleChange2(e.target.value)}
            >
              <FormControlLabel value="yes2" control={<Radio />} label={<span style={{ fontSize: '15px' }}>Yes</span>} />
              <FormControlLabel value="no2" control={<Radio />} label={<span style={{ fontSize: '15px' }}>No</span>} />
            </RadioGroup>
            {showWarning && (
              <Typography color="error" variant="body2" style={{ fontSize: '13px' }}>
                Please contact your foreman at +00393946334
              </Typography>
            )}
          </FormControl>
        </div>
      )}
      {selectedOption2 === 'yes2' && (
        <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '2rem', display: 'block', marginLeft: '16rem', marginRight: '10rem', fontSize: '15px', borderRadius: '5px', padding: '8px 30px', backgroundColor: 'DodgerBlue' }}>
          Next
        </Button>
      )}
    </div>
  );
};

export default SelectionPage;
