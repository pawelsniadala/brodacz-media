import Iframe from "react-iframe";
import ReactImageAppear from "react-image-appear";

const CardRealization = ({
    cardTitle,
    cardPhoto,
    cardPhotoSrc,
    cardVideo,
    cardVideoId,
    cardVideoUrl,
    onClick,
    layoutRef
}) => (
    <div className={`card realization ${cardPhoto ? "photo" : "video"}`}>
        {cardPhoto && (
            <div ref={layoutRef}>
                <ReactImageAppear
                    src={cardPhotoSrc}
                    onClick={onClick}
                    alt={cardTitle}
                    className="card-image card-img-top"
                    placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                    showLoader={false}
                />
            </div>
        )}
        {cardVideo && (
            <Iframe
                id={cardVideoId}
                url={cardVideoUrl}
                width="100%"
                height="219"
                display="block"
                position="relative"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        )}
    </div>
);

export default CardRealization;
