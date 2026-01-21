import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../UI/Button';
import styles from './Header.module.css';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
const links = [
    { to: '/product', label: 'Product' },
    { to: '/use-cases', label: 'Use Cases' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/integrations', label: 'Integrations' },
    { to: '/resources', label: 'Resources' },
    { to: '/company', label: 'Company' },
];
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (_jsx("header", { className: `${styles.header} glass-panel`, children: _jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.logoArea, children: _jsx(Link, { to: "/", className: styles.logoLink, children: _jsx(Logo, {}) }) }), _jsx("nav", { className: `${styles.nav} ${styles.desktopNav}`, children: links.map((link) => (_jsx(NavLink, { to: link.to, className: ({ isActive }) => (isActive ? styles.active : styles.link), children: link.label }, link.to))) }), _jsxs("div", { className: styles.actions, children: [_jsx(ThemeToggle, {}), _jsx(Button, { to: "/book-demo", variant: "glass", className: styles.cta, children: "Book a Demo" }), _jsx("button", { className: styles.menuToggle, onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": "Toggle menu", children: _jsx("div", { className: `${styles.hamburger} ${isMenuOpen ? styles.open : ''}` }) })] }), _jsxs("div", { className: `${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`, children: [links.map((link) => (_jsx(NavLink, { to: link.to, className: ({ isActive }) => (isActive ? styles.active : styles.link), onClick: () => setIsMenuOpen(false), children: link.label }, link.to))), _jsx("div", { className: styles.mobileActions, children: _jsx(Button, { to: "/book-demo", variant: "primary", style: { width: '100%' }, onClick: () => setIsMenuOpen(false), children: "Book a Demo" }) })] })] }) }));
}
export default Header;
