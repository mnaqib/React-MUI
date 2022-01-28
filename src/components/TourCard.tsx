import React from 'react';
import { Grid, Paper, Typography, Box, Rating, createTheme, ThemeProvider} from '@mui/material';
import { AccessTime } from '@mui/icons-material'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants:[ 
        {
        props: {
          variant: 'body1'
        },
        style: {
          fontSize: 11,
        }
      },
      {
        props: {
          variant: 'body2'
        },
        style: {
          fontSize: 9,
        }
      }
    ]
    }
  }
})

interface IProps {
 tour: {
  id: number 
          name: string
          duration: number
          rating: number
          numberOfReviews: number
          price: number
          image: string
 } 
}

const TourCard: React.FC<IProps> = ({tour}) => {
  return <Grid item xs={3}>
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img className='img' src={tour.image} alt="" />
        
      <Box paddingX={1}>
      <Typography variant='subtitle1' component='h2'>
        {tour.name}
      </Typography>
      <Box
      sx = {{
        display: 'flex',
        alignItems: 'center',
      }}
      >
        <AccessTime sx={{width: 12.5}}/>
        <Typography variant='body1' component='p' marginLeft={0.5}>
          {tour.duration}
        </Typography>

      </Box>
      <Box
      sx = {{
        display: 'flex',
        alignItems: 'center',
      }}
      marginTop={3}
      >
        <Rating name='read-only' value={4.5} precision={0.5} size='small'/>
        <Typography variant='body1' component='p' marginLeft={0.5}>
          {tour.rating}
        </Typography>
        <Typography variant='body2' component='p' marginLeft={1.5}>
          {`(${tour.numberOfReviews})`}
        </Typography>
      </Box>
      <Box>
      <Typography variant='h6' component='h3' marginTop={0}>
          From C ${tour.price}
        </Typography>
      </Box>
      </Box>
      
      </Paper>
      </ThemeProvider>
  </Grid>;
};

export default TourCard;
