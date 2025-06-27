import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

// Default images
import step_default_1 from '../../assets/step_deualt_1.webp';
import step_default_2 from '../../assets/step_deualt_2.jpg';

// Hover images
import step_1_img1 from '../../assets/step1_img1.webp';
import step_1_img2 from '../../assets/step1_img2.webp';
import step_2_img1 from '../../assets/step2_img1.webp';
import step_2_img2 from '../../assets/step2_img2.webp';
import step_3_img1 from '../../assets/step3_img1.webp';
import step_3_img2 from '../../assets/step3_img2.webp';

const steps = [
  {
    id: 1,
    title: 'Add your first product',
    img1: step_1_img1,
    img2: step_1_img2,
  },
  {
    id: 2,
    title: 'Customize your store',
    img1: step_2_img1,
    img2: step_2_img2,
  },
  {
    id: 3,
    title: 'Set up payments',
    img1: step_3_img1,
    img2: step_3_img2,
  },
];

const Step_img_with_text = ({ section_heading }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [images, setImages] = useState([
    { key: 'default-1', src: step_default_1 },
    { key: 'default-2', src: step_default_2 }
  ]);

  useEffect(() => {
    const preload = [
      step_default_1, step_default_2,
      step_1_img1, step_1_img2,
      step_2_img1, step_2_img2,
      step_3_img1, step_3_img2
    ];
    preload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleStepHover = (stepId) => {
    setActiveStep(stepId);
    if (!stepId) {
      setImages([
        { key: 'default-1', src: step_default_1 },
        { key: 'default-2', src: step_default_2 }
      ]);
    } else {
      const step = steps.find(s => s.id === stepId);
      setImages([
        { key: `step-${step.id}-1`, src: step.img1 },
        { key: `step-${step.id}-2`, src: step.img2 }
      ]);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `
          linear-gradient(rgba(2, 8, 8, 0.5), transparent 20%, transparent 90%, rgba(2, 8, 8, 0.5)),
          radial-gradient(at 87% 84%, rgba(2, 8, 8, 0.9) 0, transparent 50%),
          radial-gradient(at 10% 8%, rgba(2, 8, 8, 0.9) 0, transparent 50%),
          radial-gradient(at 65% 36%, rgba(63, 63, 75, 0.5) 0, transparent 50%),
          radial-gradient(at 38% 61%, rgba(63, 63, 75, 0.5) 0, transparent 50%),
          radial-gradient(at 99% 36%, rgba(63, 63, 75, 0.5) 0, transparent 50%),
          radial-gradient(at 0 62%, rgba(63, 63, 75, 0.5) 0, transparent 50%),
          linear-gradient(#09090a, #09090a)
        `,
        borderTopLeftRadius: '3rem',
        borderTopRightRadius: '3rem',
        position: 'relative',
        top: '0px',
        bottom:'0px',
        padding: '40px',
      }}
    >
      <Typography
        sx={{
          fontSize: '55px',
          color: 'white',
          textAlign: 'center',
          fontWeight: 300,
          marginBottom: '40px',
        }}
      >
        {section_heading}
      </Typography>

      <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
        {/* Image Area */}
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {images.map((img) => (
            <Box
              key={img.key}
              sx={{
                width: '300px',
                height: '330px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#000',
                animation: 'fadeIn 0.4s ease-in-out',
              }}
            >
              <img
                src={img.src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Steps Text */}
        <Box>
          {steps.map((step) => (
            <Typography
              key={step.id}
              onMouseEnter={() => handleStepHover(step.id)}
              onMouseLeave={() => handleStepHover(null)}
              sx={{
                color: activeStep && activeStep !== step.id ? '#888' : 'white',
                fontSize: '48px',
                fontWeight: 300,
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                marginBottom: '20px',
                '&:hover': {
                  color: 'white !important'
                }
              }}
            >
              <span style={{ color: '#36f4a4', fontSize: '28px' }}>
                {step.id.toString().padStart(2, '0')}
              </span>
              {step.title}
            </Typography>
          ))}
        </Box>
      </Box>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default Step_img_with_text;
