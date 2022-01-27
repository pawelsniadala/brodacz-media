import { Link } from "react-router-dom";
import logo from "./../assets/navbar/logo.png";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container container-fluid">
            <Link className="navbar-brand text-uppercase " to="/">
                <img src={logo}  height="30" alt="" />
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/video">Video</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/photo">Foto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/backstage">Backstage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/new">Aktualności</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
