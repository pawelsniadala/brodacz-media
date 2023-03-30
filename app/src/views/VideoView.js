import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import VideoCategoryPartial from './partials/video/VideoCategoryPartial';

const VideoView = () => {
    const { pathname } = useLocation();
    const { category } = useParams();

    const [ videoTab, setTab ] = useState(() => {
        const selectTab = () => {
            switch(pathname) {
                case '/video':
                    return 'video-all';
                case '/video/debates':
                    return 'video-debates';
                case '/video/immovables':
                    return 'video-immovables';
                case '/video/drone':
                    return 'video-drone';
                case '/video/events':
                    return 'video-events';
                case '/video/music':
                    return 'video-music';
                case '/video/weddings':
                    return 'video-weddings';
                case '/video/guides':
                    return 'video-guides';
                case '/video/broadcasts':
                    return 'video-broadcasts';
                case '/video/animations':
                    return 'video-animations';
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = () => {
        switch(videoTab) {
            case 'video-all':
                return <VideoCategoryPartial category='all' />;
            case 'video-debates':
                return <VideoCategoryPartial category={category} />;
            case 'video-immovables':
                return <VideoCategoryPartial category={category} />;
            case 'video-drone':
                return <VideoCategoryPartial category={category} />;
            case 'video-events':
                return <VideoCategoryPartial category={category} />;
            case 'video-music':
                return <VideoCategoryPartial category={category} />;
            case 'video-weddings':
                return <VideoCategoryPartial category={category} />;
            case 'video-broadcasts':
                return <VideoCategoryPartial category={category} />;
            case 'video-animations':
                return <VideoCategoryPartial category={category} />;
            default:
        }
    }

    const handleTab = (e, selectedTab) => {
        if (videoTab === selectedTab) {
            e.preventDefault();
        }
        setTab(selectedTab);
    };

    const setBreadcrumbsName = () => {
        switch(category) {
            case 'debates':
                return 'Biznesowe';
            case 'immovables':
                return 'Nieruchomości';
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
            case 'broadcasts':
                return 'Transmisje';
            case 'animations':
                return 'Animacje';
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <Box className='video-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper' maxWidth='xl'>
                        <Box className='breadcrumb-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Filmy
                                </Typography>
                                {setBreadcrumbsName() && (
                                    <Typography color='text.primary'>
                                        {setBreadcrumbsName()}
                                    </Typography>
                                )}
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Filmy
                            </Typography>
                        </Box>
                        <Box className='tabs-wrapper'>
                            <Tabs
                                value={pathname}
                                variant='scrollable'
                                scrollButtons='auto'
                                aria-label='scrollable auto tabs example'
                                TabIndicatorProps={{ style: { background: 'transparent' }}}
                                sx={{
                                    [`& .${tabsClasses.scrollButtons}`]: {
                                        '&.Mui-disabled': { opacity: 0.3 },
                                    }
                                }}
                            >
                                <Tab
                                    label='Wszystkie'
                                    component={Link}
                                    to={`/video`}
                                    value={`/video`}
                                    selected={videoTab === 'video-all'}
                                    onClick={(e) => handleTab(e, 'video-all')}
                                />
                                <Tab
                                    label='Biznesowe'
                                    component={Link}
                                    to={`/video/debates`}
                                    value={`/video/debates`}
                                    onClick={() => setTab('video-debates')}
                                />
                                <Tab
                                    label='Nieruchomości'
                                    component={Link}
                                    to={`/video/immovables`}
                                    value={`/video/immovables`}
                                    onClick={() => setTab('video-immovables')}
                                />
                                <Tab
                                    label='Dron'
                                    component={Link}
                                    to={`/video/drone`}
                                    value={`/video/drone`}
                                    onClick={() => setTab('video-drone')}
                                />
                                <Tab
                                    label='Eventy'
                                    component={Link}
                                    to={`/video/events`}
                                    value={`/video/events`}
                                    onClick={() => setTab('video-events')}
                                />
                                <Tab
                                    label='Teledyski'
                                    component={Link}
                                    to={`/video/music`}
                                    value={`/video/music`}
                                    onClick={() => setTab('video-music')}
                                />
                                <Tab
                                    label='Śluby'
                                    component={Link}
                                    to={`/video/weddings`}
                                    value={`/video/weddings`}
                                    onClick={() => setTab('video-weddings')}
                                />
                                <Tab
                                    label='Poradniki'
                                    component={Link}
                                    to={`/video/guides`}
                                    value={`/video/guides`}
                                    onClick={() => setTab('video-guides')}
                                />
                                <Tab
                                    label='Transmicje'
                                    component={Link}
                                    to={`/video/broadcasts`}
                                    value={`/video/broadcasts`}
                                    onClick={() => setTab('video-broadcasts')}
                                />
                                <Tab
                                    label='Animacje'
                                    component={Link}
                                    to={`/video/animations`}
                                    value={`/video/animations`}
                                    onClick={() => setTab('video-animations')}
                                />
                            </Tabs>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper' maxWidth='xl'>
                        <Box
                            className='tab-pane fade show active'
                            id={`pills-${videoTab}`}
                            role='tabpanel'
                            aria-labelledby={`pills-${videoTab}-tab`}
                        >
                            {renderTabContent(videoTab)}
                            {/* <VideoCategoryPartial category={category ? category : 'all'} />; */}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default VideoView;
