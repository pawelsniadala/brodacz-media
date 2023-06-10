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

import CardBlog from '../components/CardBlog';


import { photo } from '../data/photo';
import { blog } from '../data/blog/blog';

// const LazyLoadImageComponent = ({
//     src,
//     alt,
//     title
// }) => {
//     const [imageLoaded, setImageLoaded] = useState(false);

//     return (
//         <Box className='box'>
//             <Box className='icon-wrapper'>
//                 <PhotoLibraryIcon style={{ color: '#f6f8fa' }} />
//             </Box>
//             <LazyLoadImage
//                 src={src}
//                 alt={alt}
//                 height={'100%'}
//                 width={'100%'}
//                 effect='blur'
//                 afterLoad={() => setImageLoaded(true)}
//             />
//             <Box className={`description-wrapper ${imageLoaded ? 'show' : 'hide'}`}>
//                 <Typography
//                     variant='h6'
//                     align={'left'}
//                 >
//                     {title}
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }

const BlogSection = () => {
    return (
        <Box className='blog-section'>
            <Box className='section-wrapper'>
                <Box className='section-header'>
                    <Container className='header-wrapper'>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-section'>
                                Blog
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='section-body'>
                    <Container className='body-wrapper blog'>
                        <Box className='article-wrapper'>
                            <Box className='card-wrapper'>
                                {blog.slice(0, 3).map(item => (
                                    <CardBlog
                                        key={item.id}
                                        cardDate={item.date}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.images[0].src}
                                        cardAuthor={item.writer}
                                        cardAvatar={item.avatar}
                                        cardPath={`/blog/${item.name}`}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default BlogSection;
