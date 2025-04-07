import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// ✅ Import images
import plan1 from '../../assets/plan1.webp';
import plan1_hover from '../../assets/plan1-hover.webp';
import plan2 from '../../assets/plan2.webp';
import plan3 from '../../assets/plan3.webp';
import plan2_hover from '../../assets/plan2-hover.webp';
import plan3_hover from '../../assets/plan3-hover.webp';
import Free_trial_btn from '../Free_trial_btn';

const cardData = [
  {
    id: 1,
    image: plan1,              // ✅ directly use variable
    hoverImage: plan1_hover,
    title: 'Get started fast',
    description: 'Solo seller Megan Bre Camp started Summer Solace Tallow to sell her organic candles and skincare online and at local farmers markets.'
  },
  {
    id: 2,
    image: plan2,
    hoverImage: plan2_hover,
    title: 'Grow as big as you want',
    description: 'Athleisure brand Gymshark grew from working out of a garage to the global juggernaut it is today, with $500M+ sales annually.'
  },
  {
    id: 3,
    image: plan3,     // No separate non-hover image provided
    hoverImage: plan3_hover,
    title: 'Raise the bar',
    description: 'With the help of Shopify for enterprise, Mattel sells their iconic toys direct to customers around the world.'
  }
];


export default function PlanCard() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
  <div style={{
    background: "#02090A",
    
  }}>
    <Box
    sx={{
      display: "flex",
        justifyContent: "center",
        alignItems:"end",
        gap: "80px",
        paddingBottom:"30px",
        paddingTop:"50px"
    }}
    >
     <Typography
     sx={{
      color:"white",
      fontSize:"55px",
      fontWeight:"300",
      lineHeight:"1.1em"
     }}
     >
      For everyone from <br/> entrepreneurs to enterprise
      </Typography>

      <Typography
       sx={{
        color: "#9797A2" ,
        fontSize:"18px",
        fontWeight:"300"
       }}
      >
        
Millions of merchants of every size have collectively made <br/> over $1,000,000,000,000 in sales on Shopify.
      </Typography>
</Box>


    <Box className='card-main'
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        alignItems: "baseline",
        paddingTop: "50px",
        background: "#02090A",
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}
    >
     
      {cardData.map((card) => (
        <Card 
          key={card.id}
          sx={{ 
            maxWidth: "380px",
            background: "none",
            color: "white"
          }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box sx={{ 
            position: 'relative',
            height: "300px",
            borderRadius: "20px",
            overflow: 'hidden'
          }}>
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.5s ease',
                opacity: hoveredCard === card.id ? 0 : 1
              }}
            />
            <Box
              component="img"
              src={card.hoverImage}
              alt={`${card.title} hover`}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.5s ease',
                opacity: hoveredCard === card.id ? 1 : 0
              }}
            />
          </Box>
          <CardContent sx={{ 
            paddingLeft: "0px",
            paddingTop:"2rem",
            paddingBottom:"2rem"
           }}>
            <Typography gutterBottom variant="h5" component="div"
             sx={{
              fontSize:"20px"
             }}
            >
              {card.title}
            </Typography>
            <Typography variant="body2" 
            sx={{ 
              color: "#9797A2" ,
              fontSize:"18px",
              lineHeight:"1.2em"
            }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
        
      ))}
      
       
         

    </Box>
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      paddingBottom:"50px"
    }}
    >
    <Free_trial_btn
     text="Pick a plan that fits"
  bgColor="transparent"
  textColor="white"
  hoverBgColor="white"
  hoverTextColor="black"
  borderColor="white"
  hoverBorderColor="white"
/>

    </Box>
    
        
    </div>
  );
}