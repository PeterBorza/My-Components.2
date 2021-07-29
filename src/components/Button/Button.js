import { buttonStyle } from "./Button.module.scss";

const Button = ({ children, handler }) => {
    return (
        <button onClick={handler} className={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;
