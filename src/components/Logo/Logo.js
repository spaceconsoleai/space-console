import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../assets/logo_spaceconsole.png';
function Logo() {
    return (_jsxs(Link, { to: "/", "aria-label": "Home", className: styles.link, children: [_jsx("img", { src: logo, alt: "SpaceConsole AI", className: styles.logoImage, style: { height: '32px' } }), _jsx("span", { className: styles.text, children: "SpaceConsole" })] }));
}
export default Logo;
