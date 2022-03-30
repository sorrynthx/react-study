import PropTypes from "prop-types"; // npm install prop-types
import styles from "./Button.module.css";

function Button({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;