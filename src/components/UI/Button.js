import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
const Button = ({ children, variant = 'primary', to, className = '', ...props }) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;
    if (to) {
        return (_jsx(Link, { to: to, className: combinedClassName, children: children }));
    }
    return (_jsx("button", { className: combinedClassName, ...props, children: children }));
};
export default Button;
