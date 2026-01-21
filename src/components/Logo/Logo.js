import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logoDark from '../../assets/logo_spaceconsole.png'; // default/dark mode
import logoLight from '../../assets/logo_white.png'; // light mode
import { useTheme } from '../../context/ThemeContext';
function Logo() {
    const { theme } = useTheme();
    return (_jsxs(Link, { to: "/", "aria-label": "Home", className: styles.link, children: [_jsx("img", { src: theme === 'dark' ? logoDark : logoLight, alt: "SpaceConsole AI", className: styles.logoImage, style: { height: '32px' } }), _jsx("span", { className: styles.text, children: "SpaceConsole" })] }));
}
export default Logo;
