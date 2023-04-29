import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import Container from '../components/Container';
import HeaderSection from '../components/HeaderSection';
import LinkMore from '../components/LinkMore';

import { photo } from '../data/photo';

const LazyLoadImageComponent = ({
    src,
    alt,
    title
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Box className='box'>
            <Box className='icon-wrapper'>
                <PhotoLibraryIcon style={{ color: '#f6f8fa' }} />
            </Box>
            <LazyLoadImage
                src={src}
                alt={alt}
                height={'100%'}
                width={'100%'}
                effect='blur'
                afterLoad={() => setImageLoaded(true)}
            />
            <Box className={`description-wrapper ${imageLoaded ? 'show' : 'hide'}`}>
                <Typography
                    variant='h6'
                    align={'left'}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}

const PhotoSection2 = () => {
    return (
        <section className='photo-section'>
            <Container>
                <Box className='section-wrapper'>
                    <HeaderSection
                        sectionTitle='Zdjęcia'
                        sectionHeader='Aenean vel aliquam sapien vitae malesuada'
                        sectionSubheader='In venenatis sollicitudin lobortis cras tincidunt eget orci non vehicula'
                        sectionLinkText='Zobacz wszystkie Specjalizacje'
                        sectionLinkPath='/services'
                    />
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
                                        <LazyLoadImageComponent
                                            src={item.image}
                                            alt={item.title}
                                            title={item.title}
                                        />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <LinkMore
                        linkTo='/photo'
                        linkText='Zobacz wszystkie zdjęcia'
                        linkColor='#f9fbfc'
                    />
                </Box>
            </Container>
        </section>
    );
}

export default PhotoSection2;
