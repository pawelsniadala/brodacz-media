import { Link } from "react-router-dom";

const CardCategory = ({
    cardImg,
    cardTitle,
    cardPath
}) => (

    <div className="card category">
        <img
            src={cardImg}
            alt={cardTitle}
        />
        <div className="card-title">
            {cardTitle}
        </div>
        <Link
            className="stretched-link"
            to={cardPath ? cardPath : "#"}
        >
        </Link>

    </div>
);

export default CardCategory;
