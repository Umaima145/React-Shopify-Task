import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../App.css';


function Free_trial_btn() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='free_trial_btn'>Start free trial</Button>
      
    </Stack>
  );
}
export default Free_trial_btn