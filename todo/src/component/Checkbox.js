import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Clean up bedroom" />
      <FormControlLabel control={<Checkbox />} label="Buy some milk" />
      <FormControlLabel control={<Checkbox />} label="Jogging" />
      <FormControlLabel control={<Checkbox />} label="Learn React" />
      <FormControlLabel control={<Checkbox />} label="Doing Exercises" />
    </FormGroup>
  );
}