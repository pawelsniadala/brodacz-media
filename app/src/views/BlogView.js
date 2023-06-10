import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ClearIcon from '@mui/icons-material/Clear';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';

import Container from '../components/Container';
import CardBlog from '../components/CardBlog';
import CardBlogProposed from '../components/CardBlogProposed';

// import SearchSvg from '../assets/svg/SearchSvg';

import { blog } from '../data/blog/blog';
import { tag } from '../data/blog/tag/tag';

const BlogView = () => {








    // const [ data, setData ] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setData(blog);
    //     };
    //     fetchData();
    // }, []);


    // console.log("data", data);

    // const useListFilter = (data) => {
    //     const [ filter, setFilter ] = useState('');

    //     const filteredList = useMemo(() => {
    //         const lowercaseFilter = filter.toLowerCase();

    //         return data.filter(item =>
    //             item.date.toLowerCase().includes(lowercaseFilter) ||
    //             item.title.toLowerCase().includes(lowercaseFilter) ||
    //             item.description.toLowerCase().includes(lowercaseFilter) ||
    //             item.author.name.toLowerCase().includes(lowercaseFilter)
    //         );

    //     }, [data, filter]);

    //     return { filter, setFilter, filteredList };
    // }

    // const { filter, setFilter, filteredList } = useListFilter(data);

    // console.log("filteredList", filteredList);
    // console.log("filter", filter);


    // const itemsPerPage = 6;
    // const [ page, setPage ] = useState(1);
    // const pageCount = Math.ceil(filteredList.length / itemsPerPage);
    // const currentData = filteredList.slice(
    //     (page - 1) * itemsPerPage,
    //     page * itemsPerPage
    // );

    // const handleSetPage = (_, value) => {
    //     setPage(value);
    // };

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'instant'
    //     });
    // }, [currentData]);








    // const useListFilter = (originalData) => {
    //     const [filter, setFilter] = useState('');

    //     const filteredList = useMemo(() => {
    //         const lowercaseFilter = filter.toLowerCase();

    //         return originalData.filter((item) =>
    //             item.date.toLowerCase().includes(lowercaseFilter) ||
    //             item.title.toLowerCase().includes(lowercaseFilter) ||
    //             item.description.toLowerCase().includes(lowercaseFilter) ||
    //             item.author.name.toLowerCase().includes(lowercaseFilter)
    //         );
    //     }, [originalData, filter]);

    //     return { filter, setFilter, filteredList };
    // };

    // const [ data, setData ] = useState([]);
    // const { filter, setFilter, filteredList } = useListFilter(data);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setData(blog);
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const storedFilter = localStorage.getItem('filter');
    //     const storedPage = localStorage.getItem('page');

    //     if (storedFilter) {
    //         setFilter(storedFilter);
    //     }

    //     if (storedPage) {
    //         setPage(parseInt(storedPage));
    //     }
    // }, [setFilter]);

    // useEffect(() => {
    //     localStorage.setItem('filter', filter);
    // }, [filter]);

    // const handleSetPage = (_, value) => {
    //     setPage(value);
    //     localStorage.setItem('page', value.toString());
    // };

    // const itemsPerPage = 6;
    // const [page, setPage] = useState(1);
    // const pageCount = Math.ceil(filteredList.length / itemsPerPage);
    // const currentData = filteredList.slice(
    //     (page - 1) * itemsPerPage,
    //     page * itemsPerPage
    // );

    // const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    //     setPage(1);
    //     localStorage.removeItem('page');
    // };

    // const handleClearFilterChange = () => {
    //     localStorage.removeItem('filter');
    //     setFilter('');
    // };

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'instant',
    //     });
    // }, [currentData]);












    // const useListFilter = (originalData) => {
    //     const [filter, setFilter] = useState('');
    //     const [selectedTag, setSelectedTag] = useState(null);
      
    //     const filteredList = useMemo(() => {
    //       const lowercaseFilter = filter.toLowerCase();
      
    //       return originalData.filter((item) => {
    //         let hasTag = true;
    //         if (selectedTag) {
    //           hasTag = item.tags.includes(selectedTag);
    //         }
    //         return (
    //           hasTag &&
    //           (item.date.toLowerCase().includes(lowercaseFilter) ||
    //             item.title.toLowerCase().includes(lowercaseFilter) ||
    //             item.description.toLowerCase().includes(lowercaseFilter) ||
    //             item.author.name.toLowerCase().includes(lowercaseFilter))
    //         );
    //       });
    //     }, [originalData, filter, selectedTag]);
      
    //     return { filter, setFilter, selectedTag, setSelectedTag, filteredList };
    //   };
      
    //   const [data, setData] = useState([]);
    //   const { filter, setFilter, selectedTag, setSelectedTag, filteredList } =
    //     useListFilter(data);
      
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       setData(blog);
    //     };
    //     fetchData();
    //   }, []);
      
    //   useEffect(() => {
    //     const storedFilter = localStorage.getItem('filter');
    //     const storedPage = localStorage.getItem('page');
    //     const storedTag = localStorage.getItem('tag');
      
    //     if (storedFilter) {
    //       setFilter(storedFilter);
    //     }
      
    //     if (storedPage) {
    //       setPage(parseInt(storedPage));
    //     }
      
    //     if (storedTag) {
    //       setSelectedTag(storedTag);
    //     }
    //   }, [setFilter, setSelectedTag]);
      
    //   useEffect(() => {
    //     localStorage.setItem('filter', filter);
    //   }, [filter]);
      
    //   useEffect(() => {
    //     localStorage.setItem('tag', selectedTag);
    //   }, [selectedTag]);
      
    //   const handleSetPage = (_, value) => {
    //     setPage(value);
    //     localStorage.setItem('page', value.toString());
    //   };
      
    //   const itemsPerPage = 6;
    //   const [page, setPage] = useState(1);
    //   const pageCount = Math.ceil(filteredList.length / itemsPerPage);
    //   const currentData = filteredList.slice(
    //     (page - 1) * itemsPerPage,
    //     page * itemsPerPage
    //   );
      
    //   const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    //     setSelectedTag(null);
    //     setPage(1);
    //     localStorage.removeItem('page');
    //   };
      
    //   const handleClearFilterChange = () => {
    //     localStorage.removeItem('filter');
    //     setFilter('');
    //     setSelectedTag(null);
    //   };
      
    //   const handleTagFilterChange = (tag) => {
    //     setSelectedTag(tag);
    //     setFilter('');
    //     setPage(1);
    //     localStorage.removeItem('page');
    //   };
      












    const useListFilter = (originalData) => {
        const [ filter, setFilter ] = useState('');
        const [ selectedTags, setSelectedTags ] = useState([]);

        const filteredList = useMemo(() => {
            const lowercaseFilter = filter.toLowerCase();

            return originalData.filter((item) => {
                let hasTags = true;
                if (selectedTags.length > 0) {
                    //   hasTags = selectedTags.every((tag) => item.tags.includes(tag));
                    hasTags = selectedTags.some((tag) => item.tags.includes(tag));
                }
                return (
                    hasTags && (
                        item.date.toLowerCase().includes(lowercaseFilter) ||
                        item.title.toLowerCase().includes(lowercaseFilter) ||
                        item.description.toLowerCase().includes(lowercaseFilter) ||
                        item.writer.toLowerCase().includes(lowercaseFilter) ||
                        item.tags.some((tag) => tag.toLowerCase().includes(lowercaseFilter))
                    )
                );
            });
        }, [originalData, filter, selectedTags]);

        return { filter, setFilter, selectedTags, setSelectedTags, filteredList };
    };

    const [ data, setData ] = useState([]);
    const { filter, setFilter, selectedTags, setSelectedTags, filteredList } = useListFilter(data);

    useEffect(() => {
        const fetchData = async () => {
            setData(blog);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const storedFilter = sessionStorage.getItem('filter');
        const storedPage = sessionStorage.getItem('page');
        const storedTags = sessionStorage.getItem('tags');

        if (storedFilter) {
            setFilter(storedFilter);
        }

        if (storedPage) {
            setPage(parseInt(storedPage));
        }

        if (storedTags) {
            setSelectedTags(JSON.parse(storedTags));
        }
    }, [setFilter, setSelectedTags]);

    useEffect(() => {
        sessionStorage.setItem('filter', filter);
    }, [filter]);

    useEffect(() => {
        sessionStorage.setItem('tags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    const handleSetPage = (_, value) => {
        setPage(value);
        sessionStorage.setItem('page', value.toString());
    };

    const itemsPerPage = 6;
    const [ page, setPage ] = useState(1);
    const pageCount = Math.ceil(filteredList.length / itemsPerPage);
    const currentData = filteredList.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        // setSelectedTags([]);
        setPage(1);
        sessionStorage.removeItem('page');
    };

    const handleClearFilterChange = () => {
        sessionStorage.removeItem('filter');
        setFilter('');
        // setSelectedTags([]);
    };

    const handleTagFilterChange = (tag) => {
        const index = selectedTags.indexOf(tag);
        if (index === -1) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags([
                ...selectedTags.slice(0, index),
                ...selectedTags.slice(index + 1),
            ]);
        }
        // setFilter('');
        setPage(1);
        sessionStorage.removeItem('page');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            return false;
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [currentData, page]);

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
                                <Typography color='text.primary'>
                                    Blog
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Blog
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper blog'>
                        <Box className='articles-wrapper'>
                            <Box className='card-wrapper'>
                                {currentData.length ? currentData.map(item => (
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
                                )) : (
                                    <Box />
                                )}
                            </Box>
                            {pageCount > 1 && (
                                <Box className='pagination-wrapper'>
                                    <Pagination
                                        className='pagination'
                                        count={pageCount}
                                        page={page}
                                        onChange={handleSetPage}
                                    />
                                </Box>
                            )}
                        </Box>
                        <Box className='proposed-wrapper'>
                            <Box className='search-wrapper'>
                                <Paper
                                    className='input-blog-search'
                                    component="form"
                                >
                                    <Box className='icon-box search' aria-label="search">
                                        <SearchIcon className='serach-icon' />
                                        {/* <SearchSvg width='16px' height='16px' color='rgb(145, 158, 171)' /> */}
                                    </Box>
                                    <InputBase
                                        className='input-base'
                                        placeholder="Wyszukaj artykuł"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                        value={filter}
                                        // onChange={e => setFilter(e.target.value)}
                                        onChange={handleFilterChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    {filter && (
                                        <Box className='icon-box clear' aria-label="search">
                                            <Tooltip title='Wyczyść'>
                                                <ClearIcon className='clear-icon' onClick={handleClearFilterChange} />
                                            </Tooltip>
                                        </Box>
                                    )}
                                </Paper>
                            </Box>
                            <Box className='categories-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Kategorie
                                </Typography>
                                <Box className='list-wrapper'>
                                    <Box className='list-item'>
                                        <Box className='list-a'></Box>
                                        <Box className='list-b'>Marketing</Box>
                                    </Box>
                                    <Box className='list-item'>
                                        <Box className='list-a'></Box>
                                        <Box className='list-b'>Filmy</Box>
                                    </Box>
                                    <Box className='list-item'>
                                        <Box className='list-a'></Box>
                                        <Box className='list-b'>Zdjęcia</Box>
                                    </Box>
                                    <Box className='list-item'>
                                        <Box className='list-a'></Box>
                                        <Box className='list-b'>Podcasty</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="tags-wrapper">
                                <Typography variant='h5' className='title'>
                                    Popularne tagi
                                </Typography>
                                <Box className='chip-wrapper'>
                                    {Object.keys(tag).map(key => (
                                        <Chip
                                            key={key}
                                            className={`tag ${selectedTags.includes(tag[key].label) ? 'selected' : ''}`}
                                            variant='contained'
                                            onClick={() => handleTagFilterChange(tag[key].label)}
                                            label={tag[key].label}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='recent-wrapper'>
                                <Typography variant='h5' className='title'>
                                    Ostatnie artykuły
                                </Typography>
                                <Box className='card-wrapper'>
                                    {data.slice(0, 4).map(item => (
                                        <CardBlogProposed
                                            key={item.id}
                                            cardDate={item.date}
                                            cardTitle={item.title}
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
