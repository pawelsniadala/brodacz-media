import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import CardRealization from '../../../components/CardRealization';
import Alert from '../../../components/Alert';
import CardProposed from '../../../components/CardProposed';

import { video } from '../../../data/video/video';

import { shuffleArray } from '../../../functions/functions';

const VideoCategoryPartial = ({ category }) => {
    const videoRealizationCopy = {
        ...video.realization
    };

    const videoRealizationAll = [].concat(
        ...Object.values(videoRealizationCopy)
    );

    const videoCategoryMap = {
        all: videoRealizationAll,
        content: videoRealizationCopy.content,
        immovables: videoRealizationCopy.immovables,
        drone: videoRealizationCopy.drone,
        events: videoRealizationCopy.events,
        music: videoRealizationCopy.music,
        weddings: videoRealizationCopy.weddings,
        guides: videoRealizationCopy.guides,
        animations: videoRealizationCopy.animations
    };

    const setVideoCategory = (category) => {
        return category === 'all'
            ? shuffleArray(videoCategoryMap[category])
            : videoCategoryMap[category];
    };

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    };

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
    };

    const { width } = useWindowDimensions();

    return (
        <Box className='video-wedding-partial'>
            <Box className={`card-wrapper realization video ${setVideoCategory(category) ? '' : 'empty'}`}>
                {width >= 991.98 ? (
                    setVideoCategory(category) ? (category === 'all' ? setVideoCategory(category).filter(item => item.display !== false) : setVideoCategory(category)).map((item) => (
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
                    setVideoCategory(category) && (category === 'all' ? setVideoCategory(category).filter(item => item.display !== false) : setVideoCategory(category)).map((item) => (
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
};

export default VideoCategoryPartial;
