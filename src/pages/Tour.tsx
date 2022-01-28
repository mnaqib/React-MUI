import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from '@mui/material'
import React from 'react'
import CustomizedAccordions from '../components/Accordion'
import QuiltedImageList from '../components/ImageCollage'
import BasicModal from '../components/Modal'

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://images.ctfassets.net/rxqefefl3t5b/5QX5qG3dBxzfT3rwyTmVIb/ff5224e4d76af8b9021fb409cf2641e9/shutterstock_1499600606_copy.jpg?fl=progressive&q=80"
          alt=""
          height={325}
          width={430}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this Ticket
        </Typography>
        <Typography variant="overline" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          provident temporibus, doloribus repellendus earum, dolore voluptatum,
          est vero natus nisi maiores facilis aut voluptas. A tempore omnis hic
          velit ad optio consectetur, corrupti minus amet ea dolores error
          beatae eligendi?
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation sx={{ display: 'flex', alignItems: 'center' }}>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
