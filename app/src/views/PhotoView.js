import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import PhotoCategoryPartial from './partials/photo/PhotoCategoryPartial';

const PhotoView = () => {
    const { pathname } = useLocation();
    const { category } = useParams();

    const [ photoTab, setTab ] = useState(() => {
        const selectTab = () => {
            switch(pathname) {
                case '/photo':
                    return 'photo-all';
                case '/photo/branding':
                    return 'photo-branding';
                case '/photo/studio':
                    return 'photo-studio';
                case '/photo/outdoor':
                    return 'photo-outdoor';
                case '/photo/product':
                    return 'photo-product';
                case '/photo/drone':
                    return 'photo-drone';
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = () => {
        switch(photoTab) {
            case 'photo-all':
                return <PhotoCategoryPartial category='all' />;
            case 'photo-branding':
                return <PhotoCategoryPartial category={category} />;
            case 'photo-studio':
                return <PhotoCategoryPartial category={category} />;
            case 'photo-outdoor':
                return <PhotoCategoryPartial category={category} />;
            case 'photo-product':
                return <PhotoCategoryPartial category={category} />;
            case 'photo-drone':
                return <PhotoCategoryPartial category={category} />;
            default:
        }
    }

    const setBreadcrumbsName = () => {
        switch(category) {
            case 'branding':
                return 'Biznesowe';
            case 'studio':
                return 'Studyjne';
            case 'outdoor':
                return 'Plenerowe';
            case 'product':
                return 'Produktowe';
            case 'drone':
                return 'Dron';
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
        <Box className='photo-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper' maxWidth='xl'>
                        <Box className='breadcrumb-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Zdjęcia
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
                                Zdjęcia
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
                                    to={`/photo`}
                                    value={`/photo`}
                                    selected={photoTab === 'photo-all'}
                                    onClick={() => setTab('photo-all')}
                                />
                                <Tab
                                    label='Biznesowe'
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
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper' maxWidth='xl'>
                        <Box
                            className='tab-pane fade show active'
                            id={`pills-${photoTab}`}
                            role='tabpanel'
                            aria-labelledby={`pills-${photoTab}-tab`}
                        >
                            {renderTabContent(photoTab)}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default PhotoView;
