import { Box } from '@mui/material';
import Footer from './Components/Footer/Index'
import Header from './Components/Header/Index'
import './App.css'
import Home from './Components/Home/Index'
import About from './Components/About/Index'
import Skills from './Components/Skills/Index'
import Experience from './Components/Experience/Index'
import Contact from './Components/Contact/Index'

function App() {
    return (
        <Box>
            <Header />

            <Box id='home'>
                <Home />
            </Box>

            <Box id='about'>
                <About />
            </Box>

            <Box id='skills'>
                <Skills />
            </Box>

            <Box id='experience'>
                <Experience />
            </Box>

            <Box id='contact'>
                <Contact />
            </Box>

            <Footer />
        </Box>
    );
}
export default App;
