const Card = ({
    cardImg,
    cardTitle,
    cardDescription,
    children
}) => (
    <div className="card">
        <img
            src={cardImg}
            className="card-image card-img-top"
            alt={cardTitle}
        />
        <div className="card-body">
            <h5 className="card-title">
                {cardTitle}
            </h5>
            <p className="card-text">
                {cardDescription}
            </p>
            {children}
        </div>
    </div>
);

export default Card;
