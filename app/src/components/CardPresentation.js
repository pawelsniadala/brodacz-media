import ReactImageAppear from "react-image-appear";

const CardPresentation = ({
    cardImg,
    cardDescriptopm
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
            <ReactImageAppear
                src={cardImg}
                className="card-img"
                alt="..."
                placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                showLoader={false}
            />
        </div>
    </div>
);

export default CardPresentation;
