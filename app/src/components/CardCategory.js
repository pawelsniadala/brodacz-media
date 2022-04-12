import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";

const CardCategory = ({
    cardImg,
    cardTitle,
    cardDescription,
    cardLabel,
    cardPath,
    cardRealizations
}) => (
    <div className="card category">
        <img src={cardImg} className="card-img-top" alt={cardTitle} />

        {/* <ReactImageAppear
            className="card-img-top"
            src={cardImg}
            alt={cardTitle}
            placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
            showLoader={false}
        /> */}

        <div className="card-body">
            <h5 className="card-title">
                {cardTitle}
            </h5>
            <p className="card-text">
                {cardDescription}
            </p>
            {/* <a href="#" class="btn btn btn-success">Zobacz realizacje</a> */}
            {/* <div className="d-grid"> */}
            <button type="button" className="button-card">
                Zobacz {cardLabel}
            </button>
            {/* </div> */}
            {/* <button type="button" class="btn btn-light">Zobacz realizacje</button> */}
        </div>
        {/* <div className="card-footer text-muted">
            Realizacje • {cardRealizations}
        </div> */}
        <Link
            className="stretched-link"
            to={cardPath ? cardPath : "#"}>
        </Link>
    </div>
);

export default CardCategory;
