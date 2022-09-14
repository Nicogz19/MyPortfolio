import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import './style.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EastIcon from '@mui/icons-material/East';
import SchoolIcon from '@mui/icons-material/School';
import Aa from '../../img/aa.jpg';
import Adviters from '../../img/adviters.png';
import Adviters2 from '../../img/adviters-2.jpg';
import TimelineIcon from '../../img/Timeline-amico.png';

const CardAAEperience = () => <Box className='card principal'>
    <Box className='face front'>
        <Typography variant='h4' component='h4'>Alquiler Argentina</Typography>
        <img className='imgCircle cardImg' src={Aa} alt='Logo de AA' width={200} />
        <Typography className='bold'>Fullstack Developer</Typography>
        <EastIcon />
    </Box>
    <Box className='face back'>
        <Typography className='bold'>Used technology</Typography>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Css" variant="outlined" />
            <Chip label="Sass" variant="outlined" />
            <Chip label="Styled-component" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Javascript" variant="outlined" />
            <Chip label="Typescript" variant="outlined" />
            <Chip label="React-hooks" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="React" variant="outlined" />
            <Chip label="Redux" variant="outlined" />
            <Chip label="Redux-saga" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Amazon Web Services (AWS)" variant="outlined" />
            <Chip label="CI/CD" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Git" variant="outlined" />
            <Chip label="GitKraken" variant="outlined" />
            <Chip label="GitLab" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Php" variant="outlined" />
            <Chip label="Laravel" variant="outlined" />
            <Chip label="Mysql" variant="outlined" />
        </Stack>
    </Box>
</Box>

const CardAdvitersEperience = () => <Box className='card'>
    <Box className='face front'>
        <Typography variant='h4' component='h4'>Adviters</Typography>
        <img className='imgCircle cardImg' src={Adviters} alt='Logo de Adviters'/>
        <Typography className='bold'>Frontend Developer</Typography>
        <EastIcon />
    </Box>
    <Box className='face back'>
        <Typography className='bold'>Used technology</Typography>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Css" variant="outlined" />
            <Chip label="Sass" variant="outlined" />
            <Chip label="Responsive-design" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Javascript" variant="outlined" />
            <Chip label="Typescript" variant="outlined" />
            <Chip label="React" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="React-hooks" variant="outlined" />
            <Chip label="Redux" variant="outlined" />
            <Chip label="React-router" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1} className='chipContainer'>
            <Chip label="Git" variant="outlined" />
            <Chip label="GitHub" variant="outlined" />
            <Chip label="CI/CD" variant="outlined" />
        </Stack>
    </Box>
</Box>

const CardsExperienceDesktop = () => <Grid container justifyContent='space-between' spacing={2} className='cardContainer'>
    <Grid item xs={12} sm={12} md={6}>
        <CardAAEperience />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
        <CardAdvitersEperience />
    </Grid>
</Grid>

const Experience = () => {
    return (
        <Box className='experienceContainer'>
            <Typography variant='h4' component='h4' className='titlePage'>Experience</Typography>
            <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item xs={12} sm={12} md={8}>
                    <Timeline position="alternate" className='timeline'>
                        <TimelineItem>
                            <TimelineOppositeContent
                                className='timelineContentEnd'
                                variant="body2"
                            >
                                <CalendarMonthIcon sx={{ m: '0px 5px 0px 0px'}} /> 2017 - 2019
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot color="primary">
                                        <SchoolIcon />
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='timelineContent'>
                                <Typography variant="h6" component="span">
                                    Remedios Escalada de San Martin
                                </Typography>
                                <Typography>Third studies</Typography>
                                <Typography>Title: Information systems analyst</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                className='timelineContentStart'
                                variant="body2"
                            >
                                <CalendarMonthIcon sx={{ m: '0px 5px 0px 0px'}} /> 2020 - 2022
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot sx={{ width: '40px', padding: '0px' }}>
                                        <img className='imgCircle' src={Aa} alt='Logo de AA' width={36} />
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='timelineContent'>
                                <Typography variant="h6" component="span">
                                    Alquiler Argentina
                                </Typography>
                                <Typography>Fullstack Developer</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                className='timelineContentEnd'
                                variant="body2"
                            >
                                <CalendarMonthIcon sx={{ m: '0px 5px 0px 0px'}} /> 2022 - Actualidad
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot sx={{ width: '40px', padding: '0px' }}>
                                        <img className='imgCircle' src={Adviters2} alt='Logo de Adviters' width={36}/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='timelineContent'>
                                <Typography variant="h6" component="span">
                                    Adviters
                                </Typography>
                                <Typography>Frontend Developer</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                className='timelineContentStart'
                                variant="body2"
                            >
                                <CalendarMonthIcon sx={{ m: '0px 5px 0px 0px'}} /> 2022 - Actualidad
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot color='primary'>
                                        <LaptopMacIcon/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='timelineContent'>
                                <Typography variant="h6" component="span">
                                    Ingles Academy
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img src={TimelineIcon} alt='timeline' className='timelineImage' width={'80%'} />
                </Grid>
            </Grid>
            <CardsExperienceDesktop />
        </Box>
    )
}

export default Experience