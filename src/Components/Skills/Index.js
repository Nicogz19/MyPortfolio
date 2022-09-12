import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import TeamWork from '../../img/team-work.png';
import GoodComunication from '../../img/Webinar-pana.png';
import FastLearning from '../../img/Learning-bro.png';
import Proactivity from '../../img/Proactive.png';
import './style.css'

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} sx={{height: '15px', borderRadius: '10px' }}/>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}

const Skills = () => {
    return (
        <Box className='skillsContainer'>
            <Typography variant='h4' component='h4' className='titlePage'>Skills</Typography>
            <Grid container justifyContent='space-between' spacing={2} sx={{marginBottom: 10}} >
                <Grid item xs={11} sm={11} md={6}>
                    <Box className='progressBar'>
                        <Typography>Html</Typography>
                        <LinearProgressWithLabel value={90} />
                    </Box>
                    <Box className='progressBar'>
                        <Typography>Css</Typography>
                        <LinearProgressWithLabel value={90} />
                    </Box>
                    <Box className='progressBar'>
                        <Typography>Javascript</Typography>
                        <LinearProgressWithLabel value={70} />
                    </Box>
                    <Box className='progressBar'>
                        <Typography>Typescript</Typography>
                        <LinearProgressWithLabel value={60} />
                    </Box>
                    <Box className='progressBar'>
                        <Typography>React</Typography>
                        <LinearProgressWithLabel value={80} />
                    </Box>
                    <Box className='progressBar'>
                        <Typography>Redux & Redux-saga</Typography>
                        <LinearProgressWithLabel value={75} />
                    </Box>
                </Grid>
                <Grid item xs={11} sm={11} md={6}>
                    <Grid container justifyContent='space-around'>
                        <Grid item xs={6}>
                            <Box className='aptitudes'>
                                <img src={TeamWork} alt='teamWork' />
                                <Typography gutterBottom variant="h5">
                                    Team Work
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='aptitudes'>
                                <img src={GoodComunication} alt='goodComunication' />
                                <Typography gutterBottom variant="h5">
                                    Good communication
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='aptitudes'>
                                <img src={FastLearning} alt='fastLearning' />
                                <Typography gutterBottom variant="h5">
                                    Fast learning
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={6}>
                            <Box className='aptitudes'>
                                <img src={Proactivity} alt='proactivity' />
                                <Typography gutterBottom variant="h5">
                                    Proactivity
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills