import { Link } from "react-router-dom";
import arrowLeft24 from "./../assets/common/arrowLeft24.png";

const SectionHeader = ({
    header,
    all,
    allPath
}) => (
    <div className="section-header">
        <div className="header">
            {header}
        </div>
        {all && (
            <div className="all-wrapper">
                <Link
                    to={allPath}
                    className="all"
                    aria-current="page"
                >
                    Zobacz wszystkie
                </Link>
                <img className="arrow" src={arrowLeft24} alt="logo" />
            </div>
        )}
    </div>
);

export default SectionHeader;
