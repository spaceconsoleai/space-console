import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
function Logo() {
    return (_jsxs(Link, { to: "/", "aria-label": "Home", className: styles.link, children: [_jsx("img", { src: "/src/components/Assets/logo_spaceconsole.png", alt: "SpaceConsole AI", className: styles.logoImage, style: { height: '32px' } }), _jsx("span", { className: styles.text, children: "SpaceConsole" })] }));
}
export default Logo;
