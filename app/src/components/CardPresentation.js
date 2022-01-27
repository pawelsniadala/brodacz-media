const CardPresentation = ({
    cardImg,
    cardDescriptopm,
}) => (

    <div className="card presentation">
        <div className="grid">
            <div className="card-body">
                <article>
                    <p className="card-text">
                        {cardDescriptopm}
                    </p>
                </article>
            </div>
            <img
                src={cardImg}
                className="card-img"
                alt="..."
            />
        </div>
    </div>
);

export default CardPresentation;
