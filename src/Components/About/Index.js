import { Box, Button, Typography, Grid } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import './style.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MovieIcon from '@mui/icons-material/Movie';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import VerifiedIcon from '@mui/icons-material/Verified';
import VanillaTilt from 'vanilla-tilt';
import MyImage from '../../img/yo_2.jpg';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null)
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

const About = () => {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
    };
    return (
        <Box className='aboutContainer'>
            <Box className='background'>
                <Grid container alignItems='center' justifyContent='space-between' spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box className='myCard'>
                            <Box>
                                <img src={MyImage} alt='my' />
                            </Box>
                            <Box>
                                <Typography>Nicolás Ignacio González</Typography>
                                <Typography className='verified'>Frontend Developer <VerifiedIcon /></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className='resume'>
                        <Typography>Hello! My name is <span>Nicolás González</span> and I am a Front End Developer.</Typography>
                        <Typography>I really like programming, I do it for work and also as a hobby in my spare time, I really like learning new technologies and challenging myself with new projects.</Typography>
                        <Button color='primary' variant='contained' href="../public/CV_NicoGonzalez.docx.pdf" download>Download CV</Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-around' alignItems='center' spacing={2} className='dataContainer'>
                    <Grid item xs={12} sm={6} md={6} className='personalData'>
                        <Box>
                            <Typography component='h4' className='subtitle margin'>Personal information</Typography>
                            <Typography>Nationality: <span>Argentina</span></Typography>
                            <Typography>City: <span>Villa Carlos Paz - Córdoba</span></Typography>
                            <Typography>Birth date: <span>27/05/1998</span></Typography>
                            <Typography>Age: <span>24 years</span></Typography>
                            <Typography>Number phone: <span>3541570746</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className='interest'>
                        <Typography component='h4' className='subtitle'>My interests</Typography>
                        <Grid container>
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <SportsEsportsIcon />
                                    <Typography>Video game</Typography>
                                </Tilt>
                            </Grid>
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <SportsSoccerIcon />
                                    <Typography>Play football</Typography>
                                </Tilt>
                            </Grid>
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <DirectionsBikeIcon />
                                    <Typography>Ride a bike</Typography>
                                </Tilt>
                            </Grid>
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <SportsTennisIcon />
                                    <Typography>Play paddle</Typography>
                                </Tilt>
                            </Grid>
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <LaptopMacIcon />
                                    <Typography>Program</Typography>
                                </Tilt>
                            </Grid>
                            {/* <Grid item xs={3}>
                                <Tilt className='interests' options={options}>
                                    <DriveEtaIcon />
                                    <Typography>Travel</Typography>
                                </Tilt>
                            </Grid>
                            <Grid item xs={3}>
                                <Tilt className='interests' options={options}>
                                    <Diversity3Icon />
                                    <Typography>Meet up</Typography>
                                </Tilt>
                            </Grid> */}
                            <Grid item xs={4}>
                                <Tilt className='interests' options={options}>
                                    <MovieIcon />
                                    <Typography>Movies</Typography>
                                </Tilt>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default About