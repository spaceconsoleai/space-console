import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Card.module.css';
const Card = ({ children, className = '', title, ...props }) => {
    return (_jsxs("div", { className: `${styles.card} glass-panel ${className}`, ...props, children: [title && _jsx("h3", { className: styles.title, children: title }), children] }));
};
export default Card;
