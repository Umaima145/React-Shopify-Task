import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import shopify_banner_video from '../../assets/shopify-banner-video.webm';
import './VideoText.css';  // Import animation styles
import Free_trial_btn from '../Free_trial_btn';

const VideoText = () => {
  const [currentText, setCurrentText] = useState("big things")
  const textOptions = [
    "big things",
    "one to watch",
    "category Creator",
    "unicorn startup",
    "household name",
    "global empire",
    "solo flier",
    "story they line up for"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = textOptions.indexOf(prevText);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const words = currentText.split(" ");

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={shopify_banner_video} type="video/webm" />
      </video>

      {/* Text Content */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          color: 'white',
          width: '80%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: '10px',
            fontWeight:300,
            fontSize: '96px',
            lineHeight: 0.6 ,
          }}
        >
          Be the next
        </Typography>

        {/* Animated Words */}
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          {words.map((word, index) => (
            <Typography
              key={`${index}-${word}`}
              variant="h5"
              sx={{
                marginBottom: '20px',
                fontSize: '96px',
                marginRight: '8px',
                transform: 'translateY(100%)',
                opacity: 0,
                animation: `rollUp 0.45s ease-in-out ${index * 0.1}s forwards`,
                textAlign:'left',
                fontWeight:300,

              }}
            >
              {word}
            </Typography>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          
          <Free_trial_btn/>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Get 3 days free then 3 months for $1/month
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoText;
