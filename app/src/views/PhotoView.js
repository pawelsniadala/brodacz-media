import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import PhotoAllPartial from "./partials/photo/PhotoAllPartial";
import PhotoBrandingPartial from "./partials/photo/PhotoBrandingPartial";
import PhotoStudioPartial from "./partials/photo/PhotoStudioPartial";
import PhotoOutdoorPartial from "./partials/photo/PhotoOutdoorPartial";
import PhotoProductPartial from "./partials/photo/PhotoProductPartial";
import PhotoDronePartial from "./partials/photo/PhotoDronePartial";

const PhotoView = () => {
    const location = useLocation();

    const [ photoTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case '/photo':
                    return (
                        'photo-all'
                    );
                case '/photo/branding':
                    return (
                        'photo-branding'
                    );
                case '/photo/studio':
                    return (
                        'photo-studio'
                    );
                case '/photo/outdoor':
                    return (
                        'photo-outdoor'
                    );
                case '/photo/product':
                    return (
                        'photo-product'
                    );
                case '/photo/drone':
                    return (
                        'photo-drone'
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case "photo-all":
                return (
                    <PhotoAllPartial />
                );
            case "photo-branding":
                return (
                    <PhotoBrandingPartial />
                );
            case "photo-studio":
                return (
                    <PhotoStudioPartial />
                );
            case "photo-outdoor":
                return (
                    <PhotoOutdoorPartial />
                );
            case "photo-product":
                return (
                    <PhotoProductPartial />
                );
            case "photo-drone":
                return (
                    <PhotoDronePartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="photo-view">
            <div className="view-wrapper">
                <div className="view-header">
                    <div className="header-wrapper container">
                        <Box className='breadcrumb-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
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
                                    Zdjęcia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Zdjęcia
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
                                    to={`/photo`}
                                    value={`/photo`}
                                    selected={photoTab === 'photo-all'}
                                    onClick={() => setTab('photo-all')}
                                />
                                <Tab
                                    label='Wizerunkowe'
                                    component={Link}
                                    to={`/photo/branding`}
                                    value={`/photo/branding`}
                                    onClick={() => setTab('photo-branding')}
                                />
                                <Tab
                                    label='Studyjne'
                                    component={Link}
                                    to={`/photo/studio`}
                                    value={`/photo/studio`}
                                    onClick={() => setTab('photo-studio')}
                                />
                                <Tab
                                    label='Plenerowe'
                                    component={Link}
                                    to={`/photo/outdoor`}
                                    value={`/photo/outdoor`}
                                    onClick={() => setTab('photo-outdoor')}
                                />
                                <Tab
                                    label='Produktowe'
                                    component={Link}
                                    to={`/photo/product`}
                                    value={`/photo/product`}
                                    onClick={() => setTab('photo-product')}
                                />
                                <Tab
                                    label='Dron'
                                    component={Link}
                                    to={`/photo/drone`}
                                    value={`/photo/drone`}
                                    onClick={() => setTab('photo-drone')}
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
                                id={`pills-${photoTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${photoTab}-tab`}
                            >
                                {renderTabContent(photoTab)}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default PhotoView;
