import { Box, Button, Grid, TextField } from '@mui/material'
import React, {useState} from 'react'
import './style.css'
import emailJs from '@emailjs/browser'
import contactImg from '../../img/Mention-amico.png'
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-root':{
        '& .MuiInputBase-input': {
            color: 'white'
        },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        border: '2px solid white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
});

const Contact = () => {

    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        console.log(e.target.value, 'e.target.value')
        e.preventDefault();

        setError(e.target.value ? false : true)
    
        emailJs.sendForm('service_9hd51uc', 'template_mf0argf', e.target, 'EaLQCAnDBySBm3R-h')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Box className='contactContainer'>
            <Grid className='contactFlexContainer' container alignItems='center'>
                <Grid item md={6} className='contactImgContainer'>
                    <img className='contactImg' src={contactImg} alt='contactImg' />
                </Grid>
                <Grid className='formContactContainer' item xs={12} sm={11} md={6}>
                    <Box className='formContact' component='form' onSubmit={sendEmail}>
                        <CustomTextField 
                            label='Name' 
                            name='user_name' 
                            fullWidth 
                            error={error} 
                            helperText={error && 'complete the Name field'} 
                            variant='outlined' 
                            className='input'
                            color='secondary'
                        />
                        <CustomTextField 
                            label='Email' 
                            name='user_email' 
                            fullWidth 
                            error={error} 
                            helperText={error && 'complete the Email field'} 
                            variant='outlined' 
                            className='input'
                        />
                        <CustomTextField 
                            label='Message' 
                            name='user_message' 
                            fullWidth 
                            error={error} 
                            helperText={error && 'complete the Message field'} 
                            multiline 
                            maxRows={4} 
                            variant='outlined'
                            className='input'
                        />
                        <Button type='submit' variant='contained'>Send Email</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact