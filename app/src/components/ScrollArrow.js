import { useState } from "react";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop)

    return (
        <div className="scrollup"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
        >
            <button className="btn btn-secondary">
                <i className="fas fa-arrow-up" />
            </button>
        </div>
    );
}

export default ScrollArrow;
