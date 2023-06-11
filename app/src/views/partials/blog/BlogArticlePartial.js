import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardBlogProposed from '../../../components/CardBlogProposed';
import CardBlogAuthor from '../../../components/CardBlogAuthor';

import { blog } from '../../../data/blog/blog';

const BlogView = () => {
    const { articleId } = useParams();

    const [ data, setData ] = useState([]);
    const [ article, setArticle ] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setData(blog);
        };
        fetchData();
    }, [articleId]);

    useEffect(() => {
        const currentArticle = data.find(item => item.name === articleId) ?? {};
        setArticle(currentArticle);
    }, [articleId, data]);

    const Article = lazy(() => import(`./article/${article.component}`));

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [articleId]);

    return (
        <Box className='blog-view'>
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
                                <Link to='/blog' aria-current='page'>
                                    Blog
                                </Link>
                                <Typography color='text.primary'>
                                    {article.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {article.title}
                            </Typography>
                            <Box className='meta-wrapper'>
                                <Box className='chip-wrapper'>
                                    {article.tags?.map(item => (
                                        <Chip
                                            key={item}
                                            variant='contained'
                                            label={item}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#f0f3f6',
                                                backgroundColor: 'rgba(0,0,0,0.035)',
                                                color: '#384049'
                                            }}
                                        />
                                    ))}
                                 </Box>
                                {/* <Typography gutterBottom variant="span" component="div" className='date'>
                                    {article.date}
                                </Typography> */}
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper blog-article'>
                        <Box className='article-wrapper'>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Article content={article} />
                            </Suspense>
                        </Box>
                        <Box className='proposed-wrapper'>
                            <Box className='writer-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Autor
                                </Typography>
                                {/* <Box className='avatar-wrapper'>
                                    <Avatar alt={article.name} src={article.avatar}  sx={{ width: 100, height: 100 }} />
                                    <Box className='description'>
                                        <Typography variant='span' className='writer'>
                                            {article.writer}
                                        </Typography>
                                        <Typography variant='span' className='date'>
                                            Fotograf
                                        </Typography>
                                    </Box>
                                </Box> */}

                                <CardBlogAuthor
                                    cardTitle={article.writer}
                                    cardPosition='Fotograf'
                                    cardImage={article.avatar}
                                />
                            </Box>
                            <Box className='recent-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Ostatnie artykuły
                                </Typography>
                                <Box className='card-wrapper'>
                                    {data.slice(0, 8).map(item => (
                                        <CardBlogProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDate={item.date}
                                            cardImage={item.images[0].src}
                                            cardPath={`/blog/${item.name}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default BlogView;
