import React, {
    // useState,
    useEffect
} from 'react';
import { Link, useParams } from 'react-router-dom';
import Iframe from 'react-iframe'

// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { video } from '../../../data/video/video';

// import { shuffleArray } from '../../../functions/functions';

const VideoRealizationPartial = () => {
    const {
        category,
        videoId
    } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [videoId]);

    const videoRealizationCopy = {
        ...video.realization
    };

    const videoRealizationAll = [].concat(
        ...Object.values(videoRealizationCopy)
    );

    const videoCategoryMap = {
        all: videoRealizationAll,
        content: videoRealizationCopy.content,
        immovables: videoRealizationCopy.immovables,
        drone: videoRealizationCopy.drone,
        events: videoRealizationCopy.events,
        music: videoRealizationCopy.music,
        weddings: videoRealizationCopy.weddings,
        guides: videoRealizationCopy.guides,
        animations: videoRealizationCopy.animations,
        backstage: videoRealizationCopy.backstage
    };

    // const setVideoCategory = (category) => {
    //     return category === 'all'
    //         ? shuffleArray(videoCategoryMap[category])
    //         : videoCategoryMap[category];
    // };

    const setVideoCategory = (category) => {
        return videoCategoryMap[category];
    };

    const setBreadcrumbsName = () => {
        switch(category) {
            case 'all':
                return 'Wszystkie';
            case 'content':
                return 'Kontent';
            case 'drone':
                return 'Dron';
            case 'events':
                return 'Eventy';
            case 'music':
                return 'Teledyski';
            case 'weddings':
                return 'Śluby';
            case 'guides':
                return 'Poradniki';
            case 'animations':
                return 'Animacje';
            case 'backstage':
                return 'Backstage';
            default:
        }
    }

    // function getWindowDimensions() {
    //     const { innerWidth: width } = window;
    //     return { width };
    // };

    // function useWindowDimensions() {
    //     const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    //     useEffect(() => {
    //         function handleResize() {
    //             setWindowDimensions(getWindowDimensions());
    //         }

    //         window.addEventListener('resize', handleResize);
    //         return () => window.removeEventListener('resize', handleResize);
    //     }, []);

    //     return windowDimensions;
    // };

    // const { width } = useWindowDimensions();

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
                                // style={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'inline-grid' }}
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/video' aria-current='page'>
                                    Filmy
                                </Link>
                                <Link to={category === 'all' ? '/video' : `/video/${category}`} aria-current='page'>
                                    {setBreadcrumbsName()}
                                </Link>
                                <Typography color='text.primary'>
                                    {setVideoCategory(category).find(item => item.id === videoId)?.title ?? ''}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {setBreadcrumbsName() === 'Wszystkie' ? 'Filmy' : setBreadcrumbsName()}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper video-realization'>
                        <Box className='realization-wrapper'>
                            {setVideoCategory(category).filter(item => item.id === videoId).map(item => (
                                <Box key={item.id}>
                                    <Box className='iframe-wrapper'>
                                        <Iframe
                                            className='iframe'
                                            url={`${item.video.embed}?autoplay=1`}
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
                            {setVideoCategory(category).filter(item => item.id !== videoId).map(item => (
                                <Box key={item.id}>
                                    <CardProposed
                                        cardTitle={item.title}
                                        cardThumbnaiVideoCompany={item.company}
                                        cardThumbnaiVideoDate={item.date}
                                        cardImage={item.video.src}
                                        cardPath={`/video/${category}/${item.id}`}
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

export default VideoRealizationPartial;
