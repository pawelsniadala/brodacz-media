import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/navbar/logo.svg";
import LogoSvg from "../assets/common/LogoSvg";
import SunSvg from "../assets/common/SunSvg";
import MoonSvg from "../assets/common/MoonSvg";
import SoundOffSvg from "../assets/common/SoundOffSvg";
import SoundOnSvg from "../assets/common/SoundOnSvg";
import cameraShutterClick from "./../assets/navbar/cameraShutterClick.wav";
import cameraFocusBeep from "./../assets/navbar/cameraFocusBeep.wav";

const NavSection = () => {
    const [ darkTheme, setDarkTheme ] = useState(() => {
        const saved = localStorage.getItem("darkTheme");
        const initialValue = JSON.parse(saved);

        return initialValue || false;
    });

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

        setTheme(darkTheme)

        return () => {
            localStorage.clear();
        }
    }, [darkTheme]);

    const setTheme = (darkTheme) => {
        let app = document.querySelector("body");
        if (darkTheme) {
            app.classList.add("dark-theme");
            app.classList.remove("light-theme");
        } else {
            app.classList.add("light-theme");
            app.classList.remove("dark-theme");
        }
    }

    const [ soundOf, setSoundOf ] = useState(() => {
        const saved = localStorage.getItem("soundOf");
        const initialValue = JSON.parse(saved);

        return initialValue || false;
    });

    useEffect(() => {
        localStorage.setItem("soundOf", JSON.stringify(soundOf));

        setSoundOf(soundOf)

        return () => {
            localStorage.clear();
        }
    }, [soundOf]);

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        return { width };
    }

    const useWindowDimensions = () => {
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

    const cameraFocusBeepAudioSwitch = () => {
        let cameraFocusBeepAudio = new Audio(cameraFocusBeep);
        (width >= 991.98 && !soundOf) && cameraFocusBeepAudio.play();
    }

    const cameraShutterClickAudioSwith = () => {
        let cameraShutterClickAudio = new Audio(cameraShutterClick);
        (width >= 991.98 && !soundOf) && cameraShutterClickAudio.play();
    }

    return (
        <nav>
            <div className="navbar navbar-expand-lg">
                <div className="container container-fluid">
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink
                        className="navbar-brand text-uppercase"
                        activeclassname="active"
                        to="/"
                        onClick={() => cameraShutterClickAudioSwith()}
                    >
                        {/* <img src={logo} height="30" alt="logo" /> */}
                        <LogoSvg />
                    </NavLink>
                    <div className="button-wrapper mobile">
                        <div className="icon-wrapper"
                            title={darkTheme ? "Ustaw jasny motyw" : "Ustaw ciemny motyw"}
                            onClick={() => setDarkTheme(!darkTheme)}
                        >
                            <div className="theme-mobile">
                                {darkTheme ? (
                                    <SunSvg />
                                ) : (
                                    <MoonSvg />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/video"
                                    onClick={() => cameraFocusBeepAudioSwitch()}

                                >
                                    Video
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/photo"
                                    onClick={() => cameraFocusBeepAudioSwitch()}
                                >
                                    Foto
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/backstage"
                                    onClick={() => cameraFocusBeepAudio.play()}
                                >
                                    Backstage
                                </NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/about-me"
                                    onClick={() => cameraFocusBeepAudio.play()}
                                >
                                    O mnie
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/contact"
                                    onClick={() => cameraFocusBeepAudioSwitch()}
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="button-wrapper desktop">
                        <div className="icon-wrapper"
                            title={soundOf ? "Włącz dźwiek" : "Wyłącz dźwięk"}
                            onClick={() => setSoundOf(!soundOf)}
                        >
                            <div className="sound-desktop">
                                {soundOf ? (
                                    <SoundOffSvg />
                                ) : (
                                    <SoundOnSvg />
                                )}
                            </div>
                        </div>
                        <div className="icon-wrapper"
                            title={darkTheme ? "Ustaw jasny motyw" : "Ustaw ciemny motyw"}
                            onClick={() => {
                                setDarkTheme(!darkTheme);
                                cameraFocusBeepAudioSwitch()
                            }}
                        >
                            <div className="theme-desktop">
                                {darkTheme ? (
                                    <SunSvg />
                                ) : (
                                    <MoonSvg />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavSection;
