import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import Container from '../components/Container';
import CardServices from '../components/CardServices';

import { services } from '../data/services';

const ServicesView = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <Box className='services-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='breadcrumb-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    <FastRewindIcon />
                                    Home
                                </Link>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Usługi
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper padding-top-0'>
                        <Box className='card-wrapper'>
                            {services.map((item) => (
                                <CardServices
                                    key={item.id}
                                    cardTitle={item.title}
                                    cardDescription={item.description}
                                    cardPath={item.path}
                                    cardPathSpecialist={item.pathSpecialist}
                                    cardPathPrices={item.pathPrices}
                                    cardSpecialist={item.specialists}
                                    cardImage={item.image}
                                    cardImageVisible={false}
                                />
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ServicesView;
