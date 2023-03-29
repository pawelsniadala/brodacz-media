import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { podcast } from '../data/podcast';
// import PageHeader from '../components/PageHeader';
import CardRealization from '../components/CardRealization';
import Alert from '../components/Alert';

const PodcastView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        // <Box className='podcast-view'>
        //     <Box className='view-wrapper container'>
        //         <PageHeader header={podcast.title} />
        //         <section className='realization-section'>
        //             <Box className='section-wrapper pt-0'>
                        // <Box className={`card-wrapper realization podcast ${podcast.realization.length ? '' : 'empty'}`}>
                        //     {podcast.realization.length ? podcast.realization.map((item) => (
                        //         <CardRealization
                        //             cardThumbnaiVideo
                        //             key={item.id}
                        //             cardThumbnaiVideoAlt={item.title}
                        //             cardThumbnaiVideoTitle={item.title}
                        //             cardThumbnaiVideoCompany={item.company}
                        //             cardThumbnaiVideoDate={item.date}
                        //             cardThumbnaiVideoTime={item.podcast.time}
                        //             cardThumbnaiVideoSrc={item.podcast.src}
                        //             cardThumbnaiVideoPath={item.podcast.urlPage}
                        //         />
                        //     )) : (
                        //         <Alert
                        //             content={podcast.realization.empty}
                        //         />
                        //     )}
                        // </Box>
        //             </Box>
        //         </section>
        //     </Box>
        // </Box>

        <Box className='podcast-view'>
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
                                    Podcasty
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
                    <Container className='body-wrapper' maxWidth='xl'>
                        <Box className={`card-wrapper realization podcast ${podcast.realization.length ? '' : 'empty'}`}>
                            {podcast.realization.length ? podcast.realization.map((item) => (
                                <CardRealization
                                    cardThumbnaiVideo
                                    key={item.id}
                                    cardThumbnaiVideoAlt={item.title}
                                    cardThumbnaiVideoTitle={item.title}
                                    cardThumbnaiVideoCompany={item.company}
                                    cardThumbnaiVideoDate={item.date}
                                    cardThumbnaiVideoTime={item.podcast.time}
                                    cardThumbnaiVideoSrc={item.podcast.src}
                                    cardThumbnaiVideoPath={item.podcast.urlPage}
                                />
                            )) : (
                                <Alert
                                    content={podcast.realization.empty}
                                />
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default PodcastView;
