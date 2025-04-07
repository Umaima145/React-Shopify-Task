import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function VideoCard({
  sub_heading,
  main_sec_heading,
  video_card_heading1,
  video_card_desc1,
  video_src1,
  video_card_heading2,
  video_card_desc2,
  video_src2,
}) {
  return (
    <Box
      sx={{
        background: "#02090A",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          paddingLeft: "100px",
        }}
      >
        <Typography
          sx={{
            color: "#30DEEE",
            fontSize: "20px",
            fontWeight: "300",
            paddingBottom: "10px",
          }}
        >
          {sub_heading}
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: "55px",
            fontWeight: "300",
            paddingBottom: "50px",
          }}
        >
          {main_sec_heading}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Card
          sx={{
            maxWidth: 580,
            boxShadow: "none",
            background: "#061A1C",
            borderTop: "1px solid rgb(30 44 49)",
            borderRadius: "10px",
            height: "auto",
            padding: "10px",
          }}
        >
          <CardMedia
            component="video"
            height="400"
            src={video_src1}
            autoPlay
            muted
            loop
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontWeight: "300",
                fontSize: "20px",
                letterSpacing: "normal",
              }}
            >
              {video_card_heading1}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#9DaBAD',
                fontSize: "18px",
                lineHeight: "1.2em",
                letterSpacing: "normal",
              }}
            >
              {video_card_desc1}
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 580,
            boxShadow: "none",
            background: "#061A1C",
            borderTop: "1px solid rgb(30 44 49)",
            borderRadius: "10px",
            height: "auto",
          }}
        >
          <CardMedia
            component="video"
            height="400"
            src={video_src2}
            autoPlay
            muted
            loop
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontWeight: "300",
                fontSize: "20px",
                letterSpacing: "normal",
              }}
            >
              {video_card_heading2}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#9DaBAD',
                fontSize: "18px",
                lineHeight: "1.2em",
                letterSpacing: "normal",
              }}
            >
              {video_card_desc2}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
