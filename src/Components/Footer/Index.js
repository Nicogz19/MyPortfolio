import { Box, Link, Typography } from '@mui/material';
import { GitHub, Send, LinkedIn } from '@mui/icons-material';
import './style.css';

export default function Footer() {
  return (
    <Box className='footerContainer'>
      <Link href='https://www.linkedin.com/in/nicolas-gonzalez-397bb5196/' target='_blank' className='options'>
        <LinkedIn />
        <Typography>LinkedIn</Typography>
      </Link>
      <Link href='https://github.com/Nicogz19' target='_blank' className='options'>
        <GitHub />
        <Typography>GitHub</Typography>
      </Link>
      <Link href='mailto:niicogonzalez98@gmail.com' target='_blank' className='options'>
        <Send />
        <Typography>Email</Typography>
      </Link>
    </Box>
  );
}