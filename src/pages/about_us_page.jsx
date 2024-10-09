import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import bale from '../assets/bale.jpg';
import fasiledes from '../assets/fasiledes.webp';
import sofomar from '../assets/sofomar.jpg';
import aksum from '../assets/aksum.jpg';
import Navbar from '../components/navbar';
import Mission from '../components/mission';
import Testimonials from '../components/testimonials';
import CEOs from './../components/CEOs';
import WhyChooseUs1 from '../components/why_choose_us_1';
import WhyChooseUs2 from '../components/why_choose_us_2';
import comments from '../data/comments';
import NavbarWeb from '../components/navbarweb';

function AboutUsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${bale})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 32%', // Adjust the vertical position (20% down from the top)
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        
        {
          isMobile ?
          (        <Navbar />
          ) :
          (<NavbarWeb></NavbarWeb>)
        }

        {/* Spacing container */}
        <Container style={{ height: '40px' }}></Container>

        {/* Central Black Box */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black box with 20% opacity
            color: 'white',
            paddingTop: isMobile ? '30px' : '80px',
            borderRadius: '20px',
            textAlign: 'center',
            width: isMobile ? '90%' : '80%', // Adjust width for mobile
            margin: '20px 0',
            height: isMobile ? '400px' : '300px', // Adjust height for mobile
            position: 'relative',
          }}
        >
          <Typography variant={isMobile ? 'h3' : 'h1'}>About Us</Typography>
          <Typography
            variant="h6"
            sx={{
              margin: '20px 0',
              padding: isMobile ? '0 20px' : '0 150px', // Adjust padding for mobile
            }}
          >
            We are passionate about showcasing the beauty and rich culture of Ethiopia. Our mission is to provide unforgettable travel experiences that immerse our guests in the diverse landscapes, vibrant traditions, and historical treasures of this remarkable country.
          </Typography>
        </Box>
      </div>

      {/* Mission Section */}
      <Mission />

      {/* Why Choose Us Section */}
      <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ textAlign: 'center', margin: '40px 0' }}>
        Why Choose Us?
      </Typography>

      {/* WhyChooseUs Sections */}

      {isMobile ? (
  <WhyChooseUs2
  image={aksum}
  title="Unmatched Expertise"
  body="Our team comprises passionate locals who possess an in-depth knowledge of Ethiopia’s hidden gems and popular attractions. With years of experience in the travel industry, we ensure that every itinerary is carefully curated to provide unique and memorable experiences tailored to your interests."
    sx={{ padding: '10px' }} // Adjust padding for mobile
  />
) : (
  <WhyChooseUs1
  image={aksum}
  title="Unmatched Expertise"
  body="Our team comprises passionate locals who possess an in-depth knowledge of Ethiopia’s hidden gems and popular attractions. With years of experience in the travel industry, we ensure that every itinerary is carefully curated to provide unique and memorable experiences tailored to your interests."
    sx={{ padding: '0px' }} // Adjust padding for larger screens
  />
)}
      
      <WhyChooseUs2
        image={sofomar}
        title="Authentic Experiences"
        body="We believe in showcasing the true essence of Ethiopia. From cultural encounters with local communities to exploring breathtaking landscapes, our tours immerse you in the rich traditions and natural beauty of the country. We prioritize authentic experiences that create a genuine connection between travelers and the vibrant culture of Ethiopia."
        sx={{ padding: isMobile ? '10px' : '0px' }} // Adjust padding for mobile
      />
      

{isMobile ? (
  <WhyChooseUs2
  image={fasiledes}
  title="Commitment to Excellence"
  body="Your satisfaction is our top priority. We pride ourselves on delivering exceptional customer service, ensuring that every aspect of your journey is seamless and enjoyable. With flexible itineraries, personalized attention, and a dedication to safety and comfort, we strive to exceed your expectations and make your trip truly unforgettable."
    sx={{ padding: '10px' }} // Adjust padding for mobile
  />
) : (
  <WhyChooseUs1
  image={fasiledes}
  title="Commitment to Excellence"
  body="Your satisfaction is our top priority. We pride ourselves on delivering exceptional customer service, ensuring that every aspect of your journey is seamless and enjoyable. With flexible itineraries, personalized attention, and a dedication to safety and comfort, we strive to exceed your expectations and make your trip truly unforgettable."
    sx={{ padding: '0px' }} // Adjust padding for larger screens
  />
)}

      {/* Testimonials Section */}
      <Testimonials comments={comments} />

      {/* CEOs Section */}
      <CEOs />
    </div>
  );
}

export default AboutUsPage;
