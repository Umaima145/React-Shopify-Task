import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import shopify_banner_video from '../../assets/shopify-banner-video.webm';
import './VideoText.css';
import Free_trial_btn from '../Free_trial_btn';

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

const VideoText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % textOptions.length);
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderWords = (text, animationClass) =>
    text.split(" ").map((word, i) => (
      <Typography
        key={i}
        variant="h5"
        className={animationClass}
        sx={{
          fontSize: '96px',
          fontWeight: 300,
          marginRight: '10px',
          animationDelay: `${i * 0.1}s`,
        }}
      >
        {word}
      </Typography>
    ));

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '120vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
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

      {/* Overlay Content */}
      <Box
        sx={{
          position: 'absolute',
          top: '65%',
          left: '47%',
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
            fontWeight: 300,
            fontSize: '96px',
            lineHeight: 0.6,
          }}
        >
          Be the next
        </Typography>

        {/* Word Transition Section */}
        <Box
          sx={{
            position: 'relative',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Previous Text (slide out) */}
          {prevIndex !== null && isAnimating && (
            <Box
              key={`prev-${prevIndex}`}
              sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {renderWords(textOptions[prevIndex], "word-out")}
            </Box>
          )}

          {/* Current Text (slide in) */}
          <Box
            key={`current-${currentIndex}`}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {renderWords(textOptions[currentIndex], isAnimating ? "word-in" : "")}
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "24px",
            width: "300px",
            fontWeight: "200",
            lineHeight: "1.2em",
            paddingTop: "50px",
          }}
        >
          Dream big, build fast, and grow far on Shopify.
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              gap: '20px',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Free_trial_btn
           text="Start Free Trial"
           bgColor="#fff"
           textColor="#000"
          hoverBgColor="#d4d4d8"
          hoverTextColor="#000"
/>
            <Typography variant="body1" sx={{ color: 'white', lineHeight: "1.2", fontSize: "14px" }}>
              Get 3 days free <br /> then 3 months for $1/month
            </Typography>
          </Box>
          <Button
            onClick={handleOpenPopup}
            sx={{
              background: "transparent",
              color: "white",
              padding: "15px 20px",
              borderRadius: "30px",
              fontSize:"18px"
            }}
          >
            Why we build Shopify
          </Button>
        </Box>
      </Box>

      {/* Video Popup */}
      {openPopup && (
        <>
          <Box
            sx={{
              position: 'fixed',
              top: isScrolled ? 'auto' : '50%',
              left: isScrolled ? 'auto' : '50%',
              bottom: isScrolled ? '30px' : 'auto', // Adjust bottom position
              right: isScrolled ? '70px' : 'auto', // Adjust right position
              transform: isScrolled ? 'scale(1.1)' : 'translate(-50%, -50%)', // Reduced scale
              transition: 'all 0.5s ease',
              width: isScrolled ? '350px' : '70%', // Adjust width for scroll state
              zIndex: 9999,
              backgroundColor: 'black',
              borderRadius: '15px',
              overflow: 'hidden',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 'auto',
              }}
            >
              <source src={shopify_banner_video} type="video/webm" />
            </video>
          </Box>

          {/* Close Button - Right Side + Higher Position */}
          <IconButton
            onClick={handleClosePopup}
            sx={{
              position: 'fixed',
              top: isScrolled ? 'auto' : '0%',
              right: isScrolled ? '42px' : '12%',
              bottom: isScrolled ? '37%' : 'auto',
              zIndex: 10000,
              color: 'white',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
            }}
          >
            <CloseIcon sx={{ fontSize: '35px' }} />
          </IconButton>
        </>
      )}

      {/* Overlay to blur background (only when popup is centered) */}
      {openPopup && !isScrolled && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 9998,
            backdropFilter: 'blur(25px)',
          }}
        />
      )}
    </Box>
  );
};

export default VideoText;
