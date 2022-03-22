import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";

const CardCategory = ({
    cardImg,
    cardTitle,
    cardPath
}) => (

    <div className="card category">
        <ReactImageAppear
            src={cardImg}
            alt={cardTitle}
            placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
            showLoader={false}
        />
        <div className="card-title-wrapper" />
        <div className="card-title">
            <h3>{cardTitle}</h3>
        </div>
        <Link
            className="stretched-link"
            to={cardPath ? cardPath : "#"}
        >
        </Link>
    </div>
);

export default CardCategory;
