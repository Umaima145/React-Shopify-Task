import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
  Pinterest
} from '@mui/icons-material';

// Note: Make sure the footer_logo path is correct
import footer_logo from '../../assets/footer-logo.png';

const menus = [
  { title: "Shopify", items: [
    "About", "Careers", "Investors",
    "Press and Media","Partners","Affiliates",
    "Legal", "Service status"
  ] },

  { title: "Support", items: [
    "Merchant Support", "Help Center", "Hire a Partner",
    "Shopify Academy","Shopify Community"
   ] },

  { title: "Developers", items: [
    "Shopify.dev", "API Documentation", "Dev Degree",
   
  ] },


  { title: "Products", items: [
    "Shop", "Shop Pay", "Shopify Plus",
   "Shopify Fulfillment Network",
   "Linkpop","Shopify for Enterprise"
   ] },

  { title: "Global Impact", items: [
    "Sustainability", "Build Black", "Research"
  ] },

  { title: "Solutions", items: [
    "Online Store Builder", "Website Builder", "Ecommerce Website"
  ] },

];

const socialIcons = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <YouTube />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <LinkedIn />, href: "#" },
  { icon: <Pinterest />, href: "#" },
];

const Shopify_footer = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      paddingLeft:"90px",
      paddingRight:"90px",
      paddingTop:"80px",
      paddingBottom:"50px",
      width: '100%'
    }}>
      {/* Top Section */}
      <Grid container spacing={"8rem"}
       
      >
        {/* Logo - Commented out for now */}
        <Grid item xs={12} md={2}>
          <Box>
            <img src={footer_logo} alt="Logo" style={{width:"40px"}} />
            
          </Box>
        </Grid>

        {/* Menus */}
        <Grid item xs={12} md={10}
       
        >
          <Grid container spacing={"130px"}
          sx={{
            paddingBottom:"60px"
        }}
          >
            {menus.slice(0, 4).map((menu, index) => (
              <Grid key={index} item xs={6} sm={3}>
                <Typography variant="subtitle1" 
                sx={{
                    marginBottom:"30px",
                    fontWeight:"400"
                }}
                >
                  {menu.title}
                </Typography>
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    underline="hover"
                    display="block"
                    color="inherit"
                    sx={{ mb: "20px",
                        fontWeight:"300"
                     }}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={"130px"} mt={2}>
            {menus.slice(4).map((menu, index) => (
              <Grid key={index} item xs={6} sm={3}>
                <Typography variant="subtitle1" 
                  sx={{
                    marginBottom:"30px",
                    fontWeight:"400"
                }}
                >
                  {menu.title}
                </Typography>
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    underline="hover"
                    display="block"
                    color="inherit"
                    sx={{ mb: "20px",
                        fontWeight:"300"
                     }}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        
      </Grid>

      <Divider sx={{ 
        my: 3,
        borderTop:"1px solid #fff3", 
        
      }} />

      <Grid container justifyContent="space-between" alignItems="center"
    
      >
        <Grid item xs={12} md="auto" mb={{ xs: 2, md: 0 }}>
          <Box display="flex" gap={2} flexWrap="wrap">
            {["Terms of service", "Privacy policy", "Sitemap", "Privacy Choices"].map((text, index) => (
              <Link key={index} href="#" underline="hover" color="inherit">
                {text}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md="auto">
          <Box display="flex" gap={1}>
            {socialIcons.map((item, index) => (
              <IconButton key={index} href={item.href} color="inherit">
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shopify_footer
