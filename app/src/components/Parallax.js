const Parallax = ({
    children
}) => (
    <div className="parallax">
        <div className="photo-banner">
            <div className="photo-banner-inner">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Parallax;
