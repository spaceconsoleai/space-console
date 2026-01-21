import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../../../components/UI/Button';
import Section from '../../../components/UI/Section';
import styles from './Hero.module.css';
import bannerDark from '../../../assets/banner_spaceconsole.png'; // default/dark
import bannerLight from '../../../assets/banner_white.png'; // light
import { useTheme } from '../../../context/ThemeContext';
export default function Hero() {
    const { theme } = useTheme();
    return (_jsxs(Section, { className: styles.heroSection, children: [_jsxs("div", { className: styles.content, children: [_jsxs("h1", { className: styles.title, children: ["Turn your process into a ", _jsx("span", { className: styles.gradientText, children: "live system" }), "."] }), _jsx("p", { className: styles.subtitle, children: "Map it with AI. Measure it with live data. Fix it with guided problem solving. Stop managing via spreadsheets and static diagrams." }), _jsxs("div", { className: styles.actions, children: [_jsx(Button, { to: "/book-demo", variant: "primary", className: styles.cta, children: "Book a Demo" }), _jsx(Button, { to: "/product", variant: "secondary", children: "See how it works" })] })] }), _jsx("div", { className: `${styles.visualPlaceholder} glass-panel`, style: { padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3rem auto', maxWidth: '1200px', width: '100%' }, children: _jsx("img", { src: theme === 'dark' ? bannerDark : bannerLight, alt: "SpaceConsole AI Platform", style: { width: '100%', height: 'auto', display: 'block' } }) })] }));
}
