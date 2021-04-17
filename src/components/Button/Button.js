import styles from "./Button.module.scss";
const Button = ({ children, handler }) => {
  return (
    <button onClick={handler} className={styles.buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
