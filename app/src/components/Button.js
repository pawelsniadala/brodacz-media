const Button = ({
    type,
    className,
    content
}) => (
    <button
        type={type ? type : "button"}
        className={`btn ${className ? className : "btn-primary"}`}
    >
        {content}
    </button>
);

export default Button;
