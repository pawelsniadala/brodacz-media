// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { NavLink } from 'react-router-dom';

// import HeaderSection from '../components/HeaderSection';

import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import SectionHeader from "../components/SectionHeader";
// import CardCategory from "../components/CardCategory";
// import Alert from "../components/Alert";
// import { photo } from "../data/photo";

const HistorySection = () => {
    return (
        <section className="history-section" style={{ backgroundColor: '#f6f8fa' }}>
            <Box className="container">
                <Box className="section-wrapper">

                <Stack direction="row" spacing={4}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                        sx={{ width: 150, height: 150 }}
                    />
                                        <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
                        sx={{ width: 150, height: 150 }}
                    />

</Stack>
{/* 
                    <Box className='photos-wrapper'>
                        <ul>
                            {photo.categories.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to={item.path}
                                    >
                                        <Box
                                            className='box'
                                            data-aos={'zoom-in'}
                                            data-aos-delay={index * 100}
                                            data-aos-offset={100}
                                            data-aos-duration={600}
                                        >
                                            <LazyLoadImage
                                                height={'100%'}
                                                width={'100%'}
                                                src={item.image}
                                                alt={item.title}
                                                effect='blur'
                                            />
                                            <Box>
                                                <Typography
                                                    variant='h6'
                                                    align={'left'}
                                                    data-aos={'fade-in'}
                                                    data-aos-delay={'100'}
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: '400',
                                                        color: '#fff',
                                                        fontFamily: 'Raleway, sans-serif',
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Box> */}
                </Box>
            </Box>
        </section>
    );
}

export default HistorySection;
