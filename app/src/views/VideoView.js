import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import HomeIcon from '@mui/icons-material/Home';

import { video } from "../data/video";
import PageHeader from "../components/PageHeader";
import VideoAllPartial from "./partials/video/VideoAllPartial";
import VideoDebatePartial from "./partials/video/VideoDebatePartial";
import VideoImmovablesPartial from "./partials/video/VideoImmovablesPartial";
import VideoDronePartial from "./partials/video/VideoDronePartial";
import VideoEventPartial from "./partials/video/VideoEventPartial";
import VideoMusicPartial from "./partials/video/VideoMusicPartial";
import VideoWeddingPartial from "./partials/video/VideoWeddingPartial";
import VideoBroadcastPartial from "./partials/video/VideoBroadcastPartial";
import VideoAnimationPartial from "./partials/video/VideoAnimationPartial";

const VideoView = () => {
    const location = useLocation();

    const [ videoTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/video":
                    return (
                        "video-all"
                    );
                case "/video/debates":
                    return (
                        "video-debates"
                    );
                case "/video/immovables":
                    return (
                        "video-immovables"
                    );
                case "/video/drone":
                    return (
                        "video-drone"
                    );
                case "/video/events":
                    return (
                        "video-events"
                    );
                case "/video/music":
                    return (
                        "video-music"
                    );
                case "/video/weddings":
                    return (
                        "video-weddings"
                    );
                case "/video/broadcasts":
                    return (
                        "video-broadcasts"
                    );
                case "/video/animations":
                    return (
                        "video-animations"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });


    // const [ videoTab, setTab ] = useState(() => {
    //     const pathname = window.location.pathname;

    //     const selectTab = (pathname) => {
    //         switch(pathname) {
    //             case "/video":
    //                 return (
    //                     "video-all"
    //                 );
    //             case "/video/all":
    //                 return (
    //                     "video-all"
    //                 );
    //             case "/video/debates":
    //                 return (
    //                     "video-debates"
    //                 );
    //             case "/video/immovables":
    //                 return (
    //                     "video-immovables"
    //                 );
    //             case "/video/drone":
    //                 return (
    //                     "video-drone"
    //                 );
    //             case "/video/events":
    //                 return (
    //                     "video-events"
    //                 );
    //             case "/video/music":
    //                 return (
    //                     "video-music"
    //                 );
    //             case "/video/weddings":
    //                 return (
    //                     "video-weddings"
    //                 );
    //             case "/video/broadcasts":
    //                 return (
    //                     "video-broadcasts"
    //                 );
    //             case "/video/animations":
    //                 return (
    //                     "video-animations"
    //                 );
    //             default:
    //         }
    //     }

    //     return selectTab(pathname);
    // });

    const renderTabContent = (videoTab) => {
        switch(videoTab) {
            case "video-all":
                return (
                    <VideoAllPartial />
                );
            case "video-debates":
                return (
                    <VideoDebatePartial />
                );
            case "video-immovables":
                return (
                    <VideoImmovablesPartial />
                );
            case "video-drone":
                return (
                    <VideoDronePartial />
                );
            case "video-events":
                return (
                    <VideoEventPartial />
                );
            case "video-music":
                return (
                    <VideoMusicPartial />
                );
            case "video-weddings":
                return (
                    <VideoWeddingPartial />
                );
            case "video-broadcasts":
                return (
                    <VideoBroadcastPartial />
                );
            case "video-animations":
                return (
                    <VideoAnimationPartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="video-view">
            <div className="view-wrapper">
                <Container maxWidth="xl">
                    <Box className='breadcrumb-wrapper'>
                        {/* <Breadcrumbs
                            className='breadcrumb back'
                            aria-label='breadcrumb'
                        >
                            <Link
                                to='/'
                                aria-current='page'
                            >
                                <Box>Home</Box>
                            </Link>
                        </Breadcrumbs> */}
                        <Breadcrumbs
                            className='breadcrumb back'
                            separator={<NavigateNextIcon fontSize='smform' />}
                            aria-label='breadcrumb'
                        >
                            <Link
                                to='/'
                                aria-current='page'
                            >
                                Home
                            </Link>
                            <Typography color='text.primary'>
                                Filmy
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box className='heading-wrapper'>
                        <Typography variant='h4' className='heading-view'>
                            Filmy
                        </Typography>
                    </Box>
                    <Box className='tabs-wrapper'>
                        <Tabs
                            value={location.pathname}
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
                                onClick={() => setTab('video-all')}
                            />
                            <Tab
                                label='Debaty i wypowiedzi'
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
            </div>
            <Box className='view-body'>
                <Box className='body-wrapper'>
                    <Container maxWidth="xl">
                        <Box className='prices-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${videoTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${videoTab}-tab`}
                            >
                                {renderTabContent(videoTab)}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>


                {/* <div className="navpils">
                    <ul className="nav nav-pills video">
                        <li className="nav-item">
                            <Link
                                to="/video/all"
                                className={`nav-link${videoTab === "video-all" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-all")}
                            >
                                Wszystkie
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/debates"
                                className={`nav-link${videoTab === "video-debates" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-debates")}
                            >
                                Debaty i wypowiedzi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/immovables"
                                className={`nav-link${videoTab === "video-immovables" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-immovables")}
                            >
                                Nieruchomości
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/drone"
                                className={`nav-link${videoTab === "video-drone" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-drone")}
                            >
                                Dron
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/events"
                                className={`nav-link${videoTab === "video-events" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-events")}
                            >
                                Eventy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/music"
                                className={`nav-link${videoTab === "video-music" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-music")}
                            >
                                Teledyski
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/weddings"
                                className={`nav-link${videoTab === "video-weddings" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-weddings")}
                            >
                                Śluby
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/broadcasts"
                                className={`nav-link${videoTab === "video-broadcasts" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-broadcasts")}
                            >
                                Transmisje
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/video/animations"
                                className={`nav-link${videoTab === "video-animations" ? " active" : ""}`}
                                aria-current="page"
                                onClick={() => setTab("video-animations")}
                            >
                                Animacje
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content"
                        id="pills-tabContent"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${videoTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${videoTab}-tab`}
                        >
                            {renderTabContent(videoTab)}
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default VideoView;
