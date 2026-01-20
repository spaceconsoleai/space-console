import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
const cases = [
    {
        slug: 'manufacturing',
        title: 'Manufacturing',
        desc: 'Reduce scrap and cycle time. Track physical goods through your plant.'
    },
    {
        slug: 'service-ops',
        title: 'Service / Support',
        desc: 'Manage ticket flow and SLA breaches. Visualize support escalations.'
    },
    {
        slug: 'sales-revops',
        title: 'Sales / RevOps',
        desc: 'Visualize pipeline friction. See where deals get stuck.'
    },
    {
        slug: 'marketing',
        title: 'Marketing',
        desc: 'Optimize campaign velocity and content production workflows.'
    }
];
export default function UseCases() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Use Cases | Space Console AI for Every Team", description: "See how Manufacturing, Service, Sales, and Marketing teams use SpaceConsole AI to optimize workflows." }), _jsxs(Section, { style: { paddingTop: '8rem', textAlign: 'center' }, children: [_jsx("h1", { style: { fontSize: '3rem', marginBottom: '1rem' }, children: "Built for complex, high-volume processes" }), _jsx("p", { style: { color: 'var(--color-text-secondary)' }, children: "See how teams like yours use SpaceConsole AI." })] }), _jsx(Section, { children: _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }, children: cases.map((c) => (_jsx(Link, { to: `/use-cases/${c.slug}`, style: { textDecoration: 'none' }, children: _jsxs(Card, { className: "glass-panel", style: { height: '100%', padding: '2rem', transition: 'transform 0.2s', cursor: 'pointer' }, children: [_jsx("h3", { style: { fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }, children: c.title }), _jsx("p", { style: { color: 'var(--color-text-secondary)' }, children: c.desc }), _jsx("div", { style: { marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }, children: "Read more \u2192" })] }) }, c.slug))) }) }), _jsxs(Section, { style: { textAlign: 'center' }, children: [_jsx("p", { children: "Don't see your use case?" }), _jsx("div", { style: { marginTop: '1rem' }, children: _jsx(Button, { to: "/contact", variant: "secondary", children: "Contact Us" }) })] })] }));
}
