import { useState, useEffect } from "react";

const Jumbotron = ({
    videoSrc
}) => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    return (
        <div className="jumbotron">
            {width >= 991.98 ? (
                <div className="video-wrapper">
                    <video
                        className="video"
                        preload="preload"
                        muted="preload"
                        autoPlay="preload"
                        loop="preload"
                    >
                        <source
                            src={videoSrc}
                            type="video/mp4"
                        />
                    </video>
                </div>
            ) : (
                <div className="photo-wrapper">
                    <div className="content-wrapper">
                        <div className="company-wrapper">
                            <h1 className="display-1 company-name">Brodacz media<hr/></h1>
                            <span className="company-services">
                                film
                                <span className="dot">&#xb7;</span>
                                fotografia
                                <span className="dot">&#xb7;</span>
                                dźwięk
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Jumbotron;
