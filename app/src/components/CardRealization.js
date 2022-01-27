import Iframe from "react-iframe";

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
            <img
                src={cardPhotoSrc}
                onClick={onClick}
                alt={cardTitle}
                ref={layoutRef}
                className="card-image card-img-top"
            />
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
