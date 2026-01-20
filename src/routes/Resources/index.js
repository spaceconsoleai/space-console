import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
const articles = [
    {
        title: 'Value Stream Mapping vs Dashboards',
        desc: 'Dashboards tell you that you are late. Maps tell you where you are stuck. Why you need both.',
        readTime: '5 min read'
    },
    {
        title: 'What to Measure: Cycle Time, WIP, Throughput',
        desc: 'Don’t measure everything. Focus on the three flow metrics that actually correlate with speed.',
        readTime: '4 min read'
    },
    {
        title: 'Bottlenecks: How to spot them early',
        desc: 'A bottleneck isn’t just a slow step. It’s the step that limits the entire system. Here is how to find it using data.',
        readTime: '6 min read'
    }
];
export default function Resources() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Resources & Guides | Process Excellence", description: "Learn about Value Stream Mapping, Theory of Constraints, and Lean Operations." }), _jsxs(Section, { style: { paddingTop: '8rem', textAlign: 'center' }, children: [_jsx("h1", { style: { fontSize: '3rem', marginBottom: '1rem' }, children: "Process Excellence Guides" }), _jsx("p", { style: { color: 'var(--color-text-secondary)' }, children: "Learn about Value Stream Management, Lean, and AI mapping." })] }), _jsx(Section, { children: _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }, children: articles.map((article) => (_jsx(Link, { to: "#", style: { textDecoration: 'none' }, children: _jsxs(Card, { className: "glass-panel", style: { height: '100%', padding: '2rem', transition: 'transform 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }, children: [_jsx("div", { style: { fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }, children: "Article" }), _jsx("h3", { style: { fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }, children: article.title }), _jsx("p", { style: { color: 'var(--color-text-secondary)', flex: 1 }, children: article.desc }), _jsx("div", { style: { marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }, children: article.readTime })] }) }, article.title))) }) })] }));
}
