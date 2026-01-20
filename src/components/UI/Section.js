import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Section.module.css';
const Section = ({ children, className = '', id, ...props }) => {
    return (_jsx("section", { id: id, className: `${styles.section} ${className}`, ...props, children: _jsx("div", { className: styles.container, children: children }) }));
};
export default Section;
