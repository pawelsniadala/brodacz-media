import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "../styles/app.scss";

const MainTemplate = ({ children }) => (
    <div className="app">
        {children}
    </div>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainTemplate;
