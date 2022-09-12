import { Box, Grid, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import './style.css'
import emailJs from '@emailjs/browser'
import contactImg from '../../img/Mention-amico.png'
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

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
    '& .MuiFormHelperText-root.Mui-error': {
        color: '#720000',
        fontWeight: 'bolder'
    },
});

const CustomButton = styled(LoadingButton)({
    '& .MuiLoadingButton-loadingIndicator': {
        right: 200,
        color: 'white'
    },
    '& .MuiButtonBase-root .Mui-disabled':{
        color: 'white!important',
        margin: 100
    }
});

const Contact = () => {

    const [send, sendEmail] = useState(false)
    const [loading, setLoading] = useState(false);
    const [successfully, sendSuccessfully] = useState(false)
    const [value, setValue] = useState({
        user_name: '', 
        user_email: '', 
        user_message: ''
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const sendEmailForm = (e) => {
        sendEmail(true)
        setLoading(true)
        e.preventDefault();

        if(value.user_name && value.user_email && value.user_message){
            emailJs.sendForm('service_rb3kypi', 'template_mf0argf', e.target, 'EaLQCAnDBySBm3R-h')
            .then((result) => {
                if(result.text === 'OK'){
                    sendSuccessfully(true)
                    setLoading(false)
                    sendEmail(false)
                    setValue({user_name: '', user_email: '', user_message: ''})
                }
            }, (error) => {
                setLoading(false)
                sendSuccessfully(false)
            });
        } else{
            setLoading(false)
            sendSuccessfully(false)
        }
    };

    return (
        <Box className='contactContainer'>
            <Typography variant='h4' component='h4' className='titlePage'>Contact Me</Typography>
            <Grid className='contactFlexContainer' container alignItems='center'>
                <Grid item md={6} className='contactImgContainer'>
                    <img className='contactImg' src={contactImg} alt='contactImg' />
                </Grid>
                <Grid className='formContactContainer' item xs={11} sm={11} md={6}>
                    <Box className='formContact' component='form' onSubmit={sendEmailForm}>
                        <CustomTextField 
                            label='Name' 
                            name='user_name' 
                            fullWidth 
                            error={!value.user_name && send} 
                            helperText={!value.user_name && send && 'complete the Name field'} 
                            variant='outlined' 
                            className='input'
                            color='secondary'
                            onChange={(e) => handleChange(e)}
                            value={value.user_name}
                        />
                        <CustomTextField 
                            label='Email' 
                            name='user_email' 
                            fullWidth 
                            error={!value.user_email && send} 
                            helperText={!value.user_email && send && 'complete the Email field'} 
                            variant='outlined' 
                            className='input'
                            onChange={(e) => handleChange(e)}
                            value={value.user_email}
                        />
                        <CustomTextField 
                            label='Message' 
                            name='user_message' 
                            fullWidth 
                            error={!value.user_message && send} 
                            helperText={!value.user_message && send && 'complete the Message field'} 
                            multiline 
                            maxRows={4} 
                            variant='outlined'
                            className='input'
                            onChange={(e) => handleChange(e)}
                            value={value.user_message}
                        />
                        <CustomButton
                            endIcon={<SendIcon />}
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            type='submit'
                        >
                            Send Email
                        </CustomButton>
                        {successfully && <Box className='successfullyMessage'><Typography>Email sent successfully </Typography><CheckIcon /></Box>}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact