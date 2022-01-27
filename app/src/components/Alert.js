const Alert = ({
    type,
    content
}) => (
    <div className={(`alert ${type ? type : "alert-primary"}`).trim()} role="alert">
        {content}
    </div>
);

export default Alert;
