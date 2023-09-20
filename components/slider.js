import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Typography,
} from '@mui/material'

import React from 'react'

export default function SliderHome({ slider }) {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'url(images/a9f88059f55f18e4f2e737a3aae43224.jpg)',
        backgroundSize: 'contain',
      }}
    >
      <Container>
        <div className="hidden xl:block">
          <Grid container height={600}>
            <Grid item lg={4}>
              <CardMedia
                component={'div'}
                sx={{
                  backgroundColor: '#7DAA6A',
                  color: '#FEF8BA',
                  boxShadow: 5,
                  padding: 2,
                  marginTop: 5,
                  height: '500px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingTop: 18,
                }}
              >
                <Typography variant="h3" color={'#333'} fontWeight={500}>
                  Totul este in
                </Typography>
                <Typography
                  variant="h1"
                  fontWeight={'500'}
                  color={'#E1C158'}
                  sx={{ textShadow: '5px 4px 10px #333' }}
                >
                  Numere
                </Typography>
                <Button variant="contained" color="green" size="small">
                  Citeste mai mult
                </Button>
              </CardMedia>
            </Grid>
            <Grid item lg={8}>
              <CardMedia
                component="img"
                image={slider.image[0]}
                alt=""
                sx={{
                  height: '500px',
                  marginTop: 5,
                  boxShadow: 5,
                  borderRight: '3px solid #7DAA6A',
                  borderBottom: '3px solid #7DAA6A',
                  borderLeft: '3px solid #7DAA6A',
                  borderTop: '3px solid #7DAA6A',
                }}
              />
            </Grid>
          </Grid>
        </div>
        <div className="xl:hidden">
          <CardMedia
            component={'img'}
            image={slider.image[0]}
            alt=""
            sx={{
              border: '3px solid #7DAA6A',
              maxHeight: '500px',
              objectFit: 'fill',
            }}
          />
          <CardMedia
            component={'div'}
            sx={{
              backgroundColor: '#7DAA6A',
              color: '#FEF8BA',
              boxShadow: 5,
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="flex flex-col items-center">
              <div className="grid sm:flex sm:gap-2 text-center items-center justify-center">
                <Typography variant="h4" color={'#333'} fontWeight={500}>
                  Totul este in
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={'500'}
                  color={'#E1C158'}
                  sx={{ textShadow: '5px 4px 10px #333' }}
                >
                  Numere
                </Typography>
              </div>
              <Button variant="contained" color="green" size="small">
                Citeste mai mult
              </Button>
            </div>
          </CardMedia>
        </div>
      </Container>
    </Box>
  )
}
