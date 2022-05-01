import { Link } from "react-router-dom";

const SectionHeader = ({
    header,
    all,
    allPath
}) => (
    <div className="section-header">
        <div className="text-wrapper">
            <div className="header">
                {header}
            </div>
            {all && (
                <div className="all-wrapper">
                    <Link
                        to={allPath}
                        // className="all"
                        className="button section"
                        aria-current="page"
                    >
                        <span>Zobacz wszystkie</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="8.59 6 7.41 12" height="11px"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg> */}
                    </Link>
                </div>
            )}
        </div>
        <hr className="divider" />
    </div>
);

export default SectionHeader;
