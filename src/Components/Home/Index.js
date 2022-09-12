import React from 'react'
import { Box, Typography } from '@mui/material'
import Bubble from '../Buuble/Index';
import './style.css'
import mainImage from '../../img/uno.png'

const home = () => {
    return (
        <Box className='homeContainer'>
            <Typography variant='h1' className='title'>
                Hi, my name is <span>Nicolás González!</span>
            </Typography>

            <Box className='content'>
                <img src={mainImage} alt='main-logo' width='300' height='300' />
                <Typography variant='h4'>I'm <span>Frontend Developer</span></Typography>
            </Box>
            <Bubble />
        </Box>
    )
}
export default home