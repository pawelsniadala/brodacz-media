import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

import SectionHeader from "../components/SectionHeader";
import CardCategory from "../components/CardCategory";
import Alert from "../components/Alert";
import { photo } from "../data/photo";

const PhotoSection2 = () => {
    // const cardRealizations = (title) => {
    //     switch(title) {
    //         case "Wizerunkowe":
    //             return (
    //                 photo.realization.branding.length
    //             );
    //         case "Studyjne":
    //             return (
    //                 photo.realization.studio.length
    //             );
    //         case "Plenerowe":
    //             return (
    //                 photo.realization.outdoor.length
    //             );
    //         case "Produktowe":
    //             return (
    //                 photo.realization.product.length
    //             );
    //         default:
    //     }
    // }

    return (
        <section className="photo-section">
            <div className="container">
                <div className="section-wrapper">
                    <SectionHeader
                        header={photo.title}
                        all
                        allPath={photo.path}
                    />
                    {/* <div className="card-wrapper category photo">
                        {photo.categories.length ? photo.categories.map(item => (
                            <CardCategory
                                key={item.id}
                                cardTitle={item.title}
                                cardDescription={item.description}
                                cardLabel={item.label}
                                cardPath={item.path}
                                cardImg={item.image}
                                cardRealizations={cardRealizations(item.title)}
                            />
                        )) : (
                            <Alert
                                type="alert-light"
                                content="Brak danych"
                            />
                        )}
                    </div> */}
                    <Box className='photos-wrapper'>
                        <ul>
                            {photo.categories.map((item, index) => (
                                <li>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to={item.path}
                                    >
                                        <div className='box'>
                                            {/* <div>
                                            <p>27</p>
                                            </div> */}
                                            <LazyLoadImage
                                                height={'100%'}
                                                width={'100%'}
                                                src={item.image}
                                                alt={item.title}
                                                effect='blur'
                                            />
                                            <div>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default PhotoSection2;
