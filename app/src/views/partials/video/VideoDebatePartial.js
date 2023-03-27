import React, { useState, useEffect } from 'react';

import CardRealization from "../../../components/CardRealization";
import Alert from "../../../components/Alert";
import CardProposed from '../../../components/CardProposed';

import { video } from "../../../data/video";

const VideoDebatePartial = () => {
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
                    <div className={`card-wrapper realization video ${video.realization.debates.length ? "" : "empty"}`}>
                        {width >= 991.98 ? (
                            video.realization.debates.length ? video.realization.debates.map((item) => (
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
                            video.realization.debates.length && video.realization.debates.map((item) => (
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

export default VideoDebatePartial;
