import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import BackstageVideoPartial from "./partials/backstage/BackstageVideoPartial";
import BackstagePhotoPartial from "./partials/backstage/BackstagePhotoPartial";

const BackstageView = () => {
    const location = useLocation();

    const [ backstageTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/backstage":
                    return (
                        "backstage-video"
                    );
                case "/backstage/video":
                    return (
                        "backstage-video"
                    );
                case "/backstage/photo":
                    return (
                        "backstage-photo"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (backstageTab) => {
        switch(backstageTab) {
            case "backstage-video":
                return (
                    <BackstageVideoPartial />
                );
            case "backstage-photo":
                return (
                    <BackstagePhotoPartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="backstage-view">
            <div className="view-wrapper">
            <div className="view-header">
                    <div className="header-wrapper container">
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
                                className='breadcrumb nav'
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
                                    Backstage
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Backstage
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
                                    label='Filmy'
                                    component={Link}
                                    to={`/backstage`}
                                    value={`/backstage`}
                                    selected={backstageTab === 'backstage-video'}
                                    onClick={() => setTab('backstage-video')}
                                />
                                <Tab
                                    label='Zdjęcia'
                                    component={Link}
                                    to={`/backstage/photo`}
                                    value={`/backstage/photo`}
                                    onClick={() => setTab('backstage-photo')}
                                />
                            </Tabs>
                        </Box>

                    </div>
                </div>
                <Box className='view-body'>
                    <Box className='body-wrapper container'>
                        <Box className='prices-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${backstageTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${backstageTab}-tab`}
                            >
                                {renderTabContent(backstageTab)}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default BackstageView;
