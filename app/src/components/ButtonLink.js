import { NavLink } from "react-router-dom";

const ButtonLink = ({
    type,
    className,
    content,
    to,
    onClick,
    onChange
}) => (
    <NavLink
        // className="btn btn-success"
        className={(`button-link ${className ? className : ""}`).trim()}
        to={to}
        role="button"
        onClick={onClick}
        onChange={onChange}
    >
        <span className="content">
            {content}
        </span>
    </NavLink>
);

export default ButtonLink;
