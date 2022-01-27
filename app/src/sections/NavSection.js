import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/navbar/logo.svg";
import sun from "./../assets/navbar/sun.svg";
import moon from "./../assets/navbar/moon.png";

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
                    >
                        <img src={logo}  height="40" alt="logo" />
                    </NavLink>
                    <div className="theme-mobile" onClick={() => setDarkTheme(!darkTheme)}>
                        {darkTheme ? (
                            <img src={sun} height="30" alt="sun" />
                        ) : (
                            <img src={moon} height="30" alt="moon" />
                        )}
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/video"
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
                                >
                                    Foto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/backstage"
                                >
                                    Backstage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/new"
                                >
                                    Aktualności
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="theme-desktop" onClick={() => setDarkTheme(!darkTheme)}>
                        {darkTheme ? (
                            <img src={sun} height="30" alt="sun" />
                        ) : (
                            <img src={moon} height="30" alt="moon" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavSection;
