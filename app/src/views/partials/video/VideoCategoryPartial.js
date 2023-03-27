import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import CardRealization from '../../../components/CardRealization';
import Alert from '../../../components/Alert';
import CardProposed from '../../../components/CardProposed';

import { video } from '../../../data/video';

const VideoCategoryPartial = ({ category }) => {
    const all = [
        ...video.realization.debates,
        ...video.realization.immovables,
        ...video.realization.drone,
        ...video.realization.events,
        ...video.realization.music,
        ...video.realization.weddings,
        ...video.realization.broadcast,
        ...video.realization.animations
    ];

    const setCategory = () => {
        switch(category) {
            case 'all':
                return [ ...all ];
            case 'debates':
                return [ ...video.realization.debates ];
            case 'immovables':
                return [ ...video.realization.immovables ];
            case 'drone':
                return [ ...video.realization.drone ];
            case 'events':
                return [ ...video.realization.events ];
            case 'music':
                return [ ...video.realization.music ];
            case 'weddings':
                return [ ...video.realization.weddings ];
            case 'guides':
                return [ ...video.realization.guides ];
            case 'broadcasts':
                return [ ...video.realization.broadcast ];
            case 'animations':
                return [ ...video.realization.animations ];
            default:
        }
    }

    // const realizationCategory = video.realization[category];

    // console.log("realizationCategory", realizationCategory);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    return (
        <Box className='video-wedding-partial'>
            <Box className={`card-wrapper realization video ${setCategory() ? '' : 'empty'}`}>
                {width >= 991.98 ? (
                    setCategory() ? (category === 'all' ? setCategory().filter(item => item.display !== false) : setCategory()).map((item) => (
                        <Box key={item.id}>
                            <CardRealization
                                cardThumbnaiVideo
                                cardThumbnaiVideoAlt={item.title}
                                cardThumbnaiVideoTitle={item.title}
                                cardThumbnaiVideoCompany={item.company}
                                cardThumbnaiVideoDate={item.date}
                                cardThumbnaiVideoTime={item.video.time}
                                cardThumbnaiVideoSrc={item.video.src}
                                cardThumbnaiVideoPath={item.video.urlPage}
                            />
                        </Box>
                    )) : (
                        <Alert
                            content={video.realization.empty}
                        />
                    )
                ) : (
                    setCategory() && (category === 'all' ? setCategory().filter(item => item.display !== false) : setCategory()).map((item) => (
                        <Box key={item.id}>
                            <CardProposed
                                cardTitle={item.title}
                                cardThumbnaiVideoCompany={item.company}
                                cardThumbnaiVideoDate={item.date}
                                cardImage={item.video.src}
                                cardPath={`/team`}
                            />
                        </Box>
                    ))
                )}
            </Box>
        </Box>
    );
}

export default VideoCategoryPartial;
