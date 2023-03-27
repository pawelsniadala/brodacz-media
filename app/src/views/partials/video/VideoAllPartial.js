import React, { useState, useEffect } from 'react';

import CardRealization from "../../../components/CardRealization";
import Alert from "../../../components/Alert";
import CardProposed from '../../../components/CardProposed';

import { video } from "../../../data/video";

const VideoAllPartial = () => {
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

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // shuffleArray(all);

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
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className={`card-wrapper realization video ${all.length ? "" : "empty"}`}>
                        {width >= 991.98 ? (
                            all.length ? all.filter(item => item.display !== false).map((item) => (
                                <CardRealization
                                    cardThumbnaiVideo
                                    key={item.id}
                                    cardThumbnaiVideoAlt={item.title}
                                    cardThumbnaiVideoTitle={item.title}
                                    cardThumbnaiVideoCompany={item.company}
                                    cardThumbnaiVideoDate={item.date}
                                    cardThumbnaiVideoTime={item.video.time}
                                    cardThumbnaiVideoSrc={item.video.src}
                                    cardThumbnaiVideoPath={item.video.urlPage}
                                />
                            )) : (
                                <Alert
                                    content={video.realization.empty}
                                />
                            )
                        ) : (
                            all.length && all.filter(item => item.display !== false).map((item) => (
                                <CardProposed
                                    // key={index}
                                    cardTitle={item.title}
                                    cardThumbnaiVideoCompany={item.company}
                                    cardThumbnaiVideoDate={item.date}
                                    // cardSpeciality={item.speciality}
                                    // cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                    cardImage={item.video.src}
                                    cardPath={`/team`}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VideoAllPartial;
