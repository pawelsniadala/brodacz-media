import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Iframe from 'react-iframe'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { podcast } from '../../../data/podcast/podcast';

const PodcastRealizationPartial = () => {
    const { podcastId } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [podcastId]);

    return (
        <Box className='video-view'>
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
                                    Home
                                </Link>
                                <Link to='/podcasts' aria-current='page'>
                                    Podcasty
                                </Link>
                                <Typography color='text.primary'>
                                    {podcast.realization.find(item => item.id === podcastId)?.title ?? ''}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Podcasty
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper video-realization'>
                        <Box className='realization-wrapper'>
                            {podcast.realization.filter(item => item.id === podcastId).map(item => (
                                <Box key={item.id}>
                                    <Box className='iframe-wrapper'>
                                        <Iframe
                                            className='iframe'
                                            url={`${item.podcast.embed}?autoplay=1`}
                                            id={item.id}
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        />
                                    </Box>
                                    <Box className='description-wrapper'>
                                        <Box className='title'>
                                            {item.title}
                                        </Box>
                                        <small className='meta text-muted'>
                                            <span className='company'>
                                                {item.company}
                                            </span>
                                            <span className='company'>
                                                {item.date}
                                            </span>
                                        </small>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Box className='proposed-wrapper'>
                            {podcast.realization.filter(item => item.id !== podcastId).map(item => (
                                <Box key={item.id}>
                                    <CardProposed
                                        cardTitle={item.title}
                                        cardThumbnaiVideoCompany={item.company}
                                        cardThumbnaiVideoDate={item.date}
                                        cardImage={item.podcast.src}
                                        cardPath={`/podcasts/${item.id}`}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default PodcastRealizationPartial;
