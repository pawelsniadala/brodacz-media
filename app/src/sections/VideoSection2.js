import React, { useState } from 'react';
// import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import {
    // Navigation,
    Grid,
    Pagination,
    // Mousewheel,
    // Keyboard
} from "swiper";
// import { Pagination } from "swiper";

// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import HeaderSection from '../components/HeaderSection';
// import CardServices from '../components/CardServices';
import LinkMore from '../components/LinkMore';

// import { video } from "../data/video";
import { video } from '../data/video/video';

const LazyLoadImageComponent = ({
    src,
    alt,
    title
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Box className='box'>
            <Box className='icon-wrapper'>
                <SubscriptionsIcon style={{ color: '#f6f8fa' }} />
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

// const SampleNextArrow = ({ onClick }) => {
//     return (
//         <Box
//             className='sample-next-arrow'
//             onClick={onClick}
//         >
//             <KeyboardArrowRightIcon />
//         </Box>
//     );
// }

// function SamplePrevArrow({ onClick }) {
//     return (
//         <Box
//             className='sample-prev-arrow'
//             onClick={onClick}
//         >
//             <KeyboardArrowLeftIcon />
//         </Box>
//     );
// }

const VideoSection2 = () => {
    // const theme = useTheme();

    // const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    //     defaultMatches: true,
    // });

    // const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    //     defaultMatches: true,
    // });

    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    // const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    //     defaultMatches: true,
    // });

    // const sliderOpts = {
    //     dots: false,
    //     // arrows: isXl ? true : isLg ? false : isMd ? false : isSm ? false : false,
    //     arrows: true,
    //     // infinite: true,
    //     slidesToShow: isXl ? 3 : isLg ? 3 : isMd ? 2 : isSm ? 2 : 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     // autoplay: false,
    //     autoplaySpeed: 5000,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />
    // };

    return (
        <section className="video-section">
            <Box className="container">
                <Box className="section-wrapper">
                    <HeaderSection
                        sectionTitle='Specjalizacje'
                        sectionHeader='Aenean vel aliquam sapien vitae malesuada'
                        sectionSubheader='In venenatis sollicitudin lobortis cras tincidunt eget orci non vehicula'
                        sectionLinkText='Zobacz wszystkie Specjalizacje'
                        sectionLinkPath='/services'
                    />
                    <Box className='movies-wrapper'>
                        {/* <Slider {...sliderOpts}>
                            {video.video.slice(0, 4).map((item, index) => (
                                <Box
                                className='slider-wrapper'
                                    key={index}
                                    padding={{ xs: 1, md: 1, lg: '7.5px' }}
                                    // sx={{ paddingTop: '0 !important' }}
                                >
                                    <Box
                                        className='xxx'
                                        width={1}
                                        height={1}
                                        sx={{
                                            textDecoration: 'none',
                                            transition: 'all .2s ease-in-out'
                                        }}
                                    >
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
                                    </Box>
                                </Box>
                            ))}
                        </Slider> */}
                        <div className="lunchbox">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={15}
                            pagination={{
                                clickable: true,
                            }}
                            grid={{
                                rows: 2,
                                fill: 'row'
                            }}
                            modules={[
                                Grid,
                                Pagination
                            ]}
                            className="mySwiper"
                        >
                            {video.category.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        className='xxx'
                                        width={1}
                                        height={1}
                                        sx={{
                                            textDecoration: 'none',
                                            transition: 'all .2s ease-in-out'
                                        }}
                                    >
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
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                    </Box>
                    <LinkMore
                        linkTo="/video"
                        linkText="Zobacz wszystkie filmy"
                        linkColor="#fff"
                    />
                </Box>
            </Box>
        </section>
    );
}

export default VideoSection2;
