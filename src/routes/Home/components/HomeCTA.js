import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../../../components/UI/Section';
import Button from '../../../components/UI/Button';
import styles from './HomeCTA.module.css';
export default function HomeCTA() {
    return (_jsx(Section, { className: styles.section, children: _jsxs("div", { className: `${styles.container} glass-panel`, children: [_jsx("h2", { children: "Ready to see your process live?" }), _jsx("p", { children: "Start mapping your first workflow in minutes." }), _jsxs("div", { className: styles.actions, children: [_jsx(Button, { to: "/book-demo", variant: "primary", children: "Book a Demo" }), _jsx(Button, { to: "/product", variant: "secondary", children: "Tour the Platform" })] })] }) }));
}
