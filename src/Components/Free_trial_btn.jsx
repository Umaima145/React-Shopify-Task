import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Free_trial_btn({
  text,
  bgColor = 'white',
  textColor = 'black',
  hoverBgColor = '#f0f0f0',
  hoverTextColor = 'black',
  borderColor = 'transparent',
  hoverBorderColor = 'transparent'
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{
          backgroundColor: isHovered ? hoverBgColor : bgColor,
          color: isHovered ? hoverTextColor : textColor,
          border: `2px solid ${isHovered ? hoverBorderColor : borderColor}`,
          textTransform: 'none',
          padding: '8px 20px',
          borderRadius: '30px',
          fontSize: '18px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Button>
    </Stack>
  );
}

export default Free_trial_btn;
