import React, {
    // useEffect
} from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useTheme } from '@mui/material/styles';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import Container from '../components/Container';

const HeroSection = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    // useEffect(() => {
    //     const jarallaxInit = async () => {
    //         const jarallaxElems = document.querySelectorAll('.jarallax');
    //         if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
    //             return;
    //         }

    //         const { jarallax } = await import('jarallax');

    //         jarallax(jarallaxElems, { speed: 0.2 });
    //     };

    //     jarallaxInit();
    // });

    return (
        <Box
            component='section'
            className='hero-section'
        >
            {isMd ? (
                <Box
                    id='carouselExampleIndicators'
                    className='carousel slide carousel-fade'
                    data-bs-ride='carousel'
                >
                    {/* <ol className='carousel-indicators'>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3'></li>
                    </ol> */}
                    <Box className='carousel-inner'>
                        <Box className='carousel-item active' data-bs-interval='5000' style={{ height: '790px' }}>
                        {/* <Box className='carousel-item active' data-bs-interval='5000' style={{ height: 'calc(100vh - 335px)' }}> */}
                            <LazyLoadImage
                                width={'100%'}
                                src={require('../assets/hero/hero1a.jpg')}
                                
                                alt='...'
                                effect='blur'
                                style={{
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    height: '790px',
                                    // height: 'calc(100vh - 335px)',
                                    objectPosition: '50% 65%',
                                    filter: 'brightness(0.8)',
                                }}
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ bottom: '3.25rem' }}>
                                <Container>
                                    <Typography
                                        variant='h4'
                                        align={'left'}
                                        // data-aos={'fade-in'}
                                        // data-aos-delay={'100'}
                                        gutterBottom
                                        sx={{
                                            // color: '#fff',
                                            color: 'rgba(255,255,255,0.95)',
                                            fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                                            // fontSize: '2.5rem',
                                            // fontWeight: 500,
                                            // lineHeight: 1.1,
                                            letterSpacing: '-0.025em',
                                            fontSize: '3.1rem',
                                            lineHeight: '1.15',
                                            marginBottom: '24px',
                                            textShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.15)',
                                            fontWeight: '400',
                                        }}
                                    >
                                        Zapraszam do świata
                                        <br/>obrazów i emocji
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
                                                to={`/services`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                endIcon={<ArrowForwardIcon />}
                                                // startIcon={<PhotoLibraryIcon />}
                                            >
                                                Zobacz moje usługi
                                            </Button>
                                        </Box>
                                    </Box>
                                        {/* <Box
                                            display='flex'
                                            justifyContent={'right'}
                                            // marginTop={2}
                                            // data-aos={'fade-in'}
                                            // data-aos-delay={'100'}
                                            gap={'15px'}
                                        >
                                            <Box
                                                // className='link-contained-more'
                                                className='link-outlined-contact'
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
                                                    Filmy
                                                </Button>
                                            </Box>
                                            <Box
                                                className='link-outlined-contact'
                                                width='auto'

                                            >
                                                <Button
                                                    component={Link}
                                                    to={`/photo`}
                                                    variant='contained'
                                                    color='primary'
                                                    size='large'
                                                    // endIcon={<ArrowForwardIcon />}
                                                    startIcon={<PhotoLibraryIcon />}
                                                >
                                                    Zdjęcia
                                                </Button>
                                            </Box>
                                        </Box> */}
                                    {/* </Box> */}
                                </Container>
                            </Box>
                        </Box>
                        {/* <Box className='carousel-item' data-bs-interval='5000' style={{ height: '670px' }}>
                            <img
                                src={require('../assets/hero/hero2.jpg')}
                                alt='...'
                                style={{
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '670px',
                                    objectPosition: '50% 77%',
                                    filter: 'brightness(0.85)',
                                }}
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ bottom: '1.25rem' }}>
                                <Box className="container">
                                    <Typography
                                        variant='h4'
                                        align={'right'}
                                        gutterBottom
                                        sx={{
                                            fontFamily: 'Lato,sans-serif',
                                            fontSize: '30px',
                                            lineHeight: '1.208em',
                                            letterSpacing: '.045em',
                                            textTransform: 'uppercase',
                                            fontWeight: '500',
                                            color: '#fff',
                                        }}
                                    >
                                        Dermatologia
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        align={'right'}
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            color: '#fff',
                                            fontFamily: 'Raleway, sans-serif',
                                        }}
                                    >
                                        Zapoznaj się z cennikiem naszych usług
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'right'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/prices`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz cennik usług
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}
                        {/* <Box className='carousel-item' data-bs-interval='5000' style={{ height: '670px' }}>
                            <img
                                src={require('../assets/hero/hero3.jpg')}
                                alt='...'
                                style={{
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '670px',
                                    objectPosition: '50% 60%',
                                    filter: 'brightness(0.85)',
                                }}
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ top: '1.25rem' }}>
                                <Box className='container'>
                                    <Typography
                                        variant='h4'
                                        align={'right'}
                                        gutterBottom
                                        sx={{
                                            fontFamily: 'Lato,sans-serif',
                                            fontSize: '30px',
                                            lineHeight: '1.208em',
                                            letterSpacing: '.045em',
                                            textTransform: 'uppercase',
                                            fontWeight: '500',
                                            color: '#fff',
                                        }}
                                    >
                                        Medycyna estetyczna
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        align={'right'}
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            color: '#fff',
                                            fontFamily: 'Raleway, sans-serif',
                                        }}
                                    >
                                        Korzystamy z najnowszych technologii medycznych
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'right'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/technology`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasz sprzęt
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}
                        {/* <Box className='carousel-item' data-bs-interval='5000' style={{ height: '670px' }}>
                            <img
                                src={require('../assets/hero/hero4.jpg')}
                                alt='...'
                                style={{
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '670px',
                                    objectPosition: '50% 45%',
                                    filter: 'brightness(0.85)',
                                }}
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ top: '1.25rem' }}>
                                <Box className='container'>
                                    <Typography
                                        variant='h4'
                                        align={'left'}
                                        gutterBottom
                                        sx={{
                                            fontFamily: 'Lato,sans-serif',
                                            fontSize: '30px',
                                            lineHeight: '1.208em',
                                            letterSpacing: '.045em',
                                            textTransform: 'uppercase',
                                            fontWeight: '500',
                                            color: '#fff',
                                        }}
                                    >
                                        Kosmetologia
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        align={'left'}
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            color: '#fff',
                                            fontFamily: 'Raleway, sans-serif',
                                        }}
                                    >
                                        Nasz zespół składa się z wysokiej klasy specjalistów
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'left'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/team`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasz zespół
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}
                    </Box>
                    {/* <a className='carousel-control-prev'
                        href='#carouselExampleIndicators'
                        role='button'
                        data-bs-slide='prev'
                    >
                        <span className='carousel-control-prev-icon' aria-hidden='true' />
                        <span className='sr-only' />
                    </a>
                    <a className='carousel-control-next'
                        href='#carouselExampleIndicators'
                        role='button'
                        data-bs-slide='next'
                    >
                        <span className='carousel-control-next-icon' aria-hidden='true' />
                        <span className='sr-only' />
                    </a> */}
                </Box>
            ) : (
                <Box className='jumbotron'>
                    <Box className='photo-wrapper'>
                        <Box className='content-wrapper'>
                            <Box className='company-wrapper'>
                                <Box className='container'>
                                    <Typography
                                        variant='h4'
                                        align={'center'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                        gutterBottom
                                        sx={{
                                            fontFamily: 'Lato,sans-serif',
                                            fontSize: '25px',
                                            lineHeight: '1.208em',
                                            letterSpacing: '.045em',
                                            textTransform: 'uppercase',
                                            fontWeight: '500',
                                            color: '#fff'
                                        }}
                                    >
                                        Zadbaj o zdrową skórę
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        align={'center'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            color: '#fff',
                                            fontFamily: 'Raleway, sans-serif',
                                        }}
                                    >
                                        Zapoznaj się z treścią naszych usług
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'center'}
                                        marginTop={2}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'

                                        >
                                            <Button
                                                component={Link}
                                                to={`/services`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasze Specjalizacje
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default HeroSection;
