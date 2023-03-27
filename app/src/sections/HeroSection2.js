import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

// import Container from '../components/Container';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import SectionHeader from '../components/SectionHeader';
import pricesJpg1 from '../assets/prices/prices1.jpg';
import pricesJpg2 from '../assets/prices/prices2.jpg';

const HeroSection2 = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    useEffect(() => {
        const jarallaxInit = async () => {
        const jarallaxElems = document.querySelectorAll('.jarallax');
        if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
            return;
        }

        const { jarallax } = await import('jarallax');
            jarallax(jarallaxElems, { speed: 0.2 });
        };

        jarallaxInit();
    });

    return (
        <Box
            component='section'
            className='price-section'
        >
            <Box
                className={'jarallax'}
                data-jarallax
                data-speed="0.2"
                position={'relative'}
                minHeight={{ xs: 'calc(100vh - 105px)', sm: 790, md: 790 }}
                sx={{ paddingBottom: '3.5rem', paddingTop: '1.25rem' }}
                display={'flex'}
                alignItems={'end'}
            >
                <Box
                    className={'jarallax-img'}
                    sx={{
                        // position: 'absolute',
                        // objectFit: 'cover',
                        // fontFamily: 'object-fit: cover;',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        // backgroundPosition: 'center center',
                        backgroundImage: `url(${isMd ? require('../assets/hero/hero1a.jpg') : require('../assets/hero/hero1a.jpg')})`,

                        // objectFit: 'cover',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'cover',
                        height: '790px',
                        // height: 'calc(100vh - 335px)',
                        // backgroundPosition: '50% 140%',
                        backgroundPosition: 'center bottom',
                        filter: 'brightness(0.8)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: 1,
                        height: 1,
                        // background: alpha('#161c2d', 0.25),
                        zIndex: 1,
                    }}
                />
                <Container
                    maxWidth="xl"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        padding: 0,
                    }}
                >
                    {/* <Container > */}
                    <Typography
                        variant='h4'
                        align={'left'}
                        // data-aos={'fade-in'}
                        // data-aos-delay={'100'}
                        gutterBottom
                        sx={{
                            // fontFamily: 'Lato,sans-serif',
                            // fontSize: '30px',
                            // lineHeight: '1.208em',
                            // letterSpacing: '.045em',
                            // textTransform: 'uppercase',
                            // fontWeight: '500',
                            // color: '#fff'


                            // color: 'hsla(0,0%,100%,.95)',
                            color: '#fff',
                            color: 'rgba(255,255,255,0.95)',
                            fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                            // fontFamily: 'Raleway,sans-serif',
                            fontSize: '2.5rem',
                            fontWeight: 500,
                            lineHeight: 1.1,
                            // letterSpacing: '.0005em',
                            // letterSpacing: '-0.025em',
                            letterSpacing: '-0.025em',
                            // marginBottom: '30px'


                            // fontFamily: '"Public Sans", sans-serif',
                            fontSize: '3.1rem',
                            lineHeight: '1.15',
                            marginBottom: '24px',
                            textShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.15)',
                            fontWeight: '400',
                            // color: '#2B2B2B'
                            // textTransform: 'uppercase',
                            // fontSize: '2.5rem'
                        }}
                    >
                        Zapraszam do świata
                        <br/>obrazów i emocji

                        {/* Witajcie w miejscu
                        <br/>barw i dźwięków */}

                        {/* Witajcie w miejscu
                        <br/>pełnym barw i dźwięków */}
                    </Typography>
                    <Typography
                        variant='h6'
                        align={'left'}
                        // data-aos={'fade-in'}
                        // data-aos-delay={'100'}
                        sx={{
                            fontSize: '18px',
                            fontWeight: '400',
                            // color: '#fff',
                            // color: '#f6f8fa',
                            color: 'rgba(255,255,255,0.9)',
                            // fontFamily: 'Raleway, sans-serif',
                            // marginBottom: '30px'


                            fontFamily: '"Public Sans", sans-serif',
                            marginBottom: '40px',
                            lineHeight: '1.5',
                            textShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.15)',
                            // color: '#2B2B2B'
                        }}
                    >
                        {/* Exploring our built environments from brutalist lorem
                        <br/>buildings to eccentric lorem ipsum dolor sii amet build find as */}

                        Posiadam wszechstronne umiejętności w zakresie marketingu internetowego,
                        <br/>obejmujące tworzenie grafiki, produkcję podcastów branżowych oraz cykli tematycznych.
                        <br/>Dostarczam wysokiej jakości treści wizualne, które przyciągają uwagę.
                    </Typography>
                    {/* <Box
                        display='flex'
                        justifyContent='space-between'
                    > */}
                    <Box
                        display='flex'
                        justifyContent={'left'}
                        // marginTop={2}
                        // data-aos={'fade-in'}
                        // data-aos-delay={'100'}
                        gap={'15px'}
                    >
                        {/* <Box
                            className='link-contained-more'
                            width='auto'

                        >
                            <Button
                                component={Link}
                                to={`/video`}
                                variant='contained'
                                color='primary'
                                size='large'
                                // endIcon={<ArrowForwardIcon />}
                                startIcon={<VideoLibraryIcon />}
                            >
                                Zobacz moje filmy
                            </Button>
                        </Box> */}
                        <Box
                            className='link-outlined-contact'
                            // className='link-contained-more'
                            width='auto'

                        >
                            <Button
                                component={Link}
                                to={`/photo`}
                                variant='contained'
                                color='primary'
                                size='large'
                                endIcon={<ArrowForwardIcon />}
                                // startIcon={<PhotoLibraryIcon />}
                            >
                                Zobacz mój reel
                            </Button>
                        </Box>
                    </Box>
                    {/* </Container> */}
                </Container>
            </Box>
        </Box>
    );
}

export default HeroSection2;
