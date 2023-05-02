import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardBlogProposed from '../../../components/CardBlogProposed';

import { blog } from '../../../data/blog/blog';

const BlogView = () => {
    const { articleId } = useParams();
    // debugger
    const [ data, setData ] = useState([]);
    const [ article, setArticle ] = useState({});
    // debugger
    useEffect(() => {
        const fetchData = async () => {
            setData(blog);
        };
        fetchData();
    }, []);
    // debugger
    useEffect(() => {
        const currentArticle = data.find(item => item.name === articleId) ?? {};
        // const currentArticle = data.filter(item => item.id === articleId)[0] || {};
        setArticle(currentArticle);
    }, [articleId, data]);
    
    // debugger
    // const article = data.find(item => item.name === articleId) ?? {};




    // console.log("article", article);
    
    const Article = lazy(() => import(`./article/${article.component}`));


    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'instant'
    //     });
    // }, [data]);

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
                            <Box className='author-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Autor
                                </Typography>
                                    <Box className='avatar-wrapper'>
                                    <Avatar alt={article.name} src={article.avatar}  sx={{ width: 60, height: 60 }} />
                                    <Box className='description'>
                                        <Typography variant="span" className='author'>
                                            {article.author}
                                        </Typography>
                                        <Typography variant="span" className='date'>
                                            Fotograf
                                        </Typography>
                                    </Box>
                                </Box>
                           
                            </Box>
                            <Box className='recent-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Ostatnie artykuły
                                </Typography>
                                <Box className='card-wrapper'>
                                    {data.slice(0, 8).map(item => (
                                        <CardBlogProposed
                                            key={item.id}
                                            cardDate={item.date}
                                            cardTitle={item.title}
                                            cardImage={item.image}
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
