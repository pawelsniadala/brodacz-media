import { Link } from "react-router-dom";

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
                {/* <span className="arrow-wrapper"> */}
                    {/* <svg focusable="false" fill="#8ab4f8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg> */}
                {/* </span> */}
            </div>
        )}
    </div>
);

export default SectionHeader;
