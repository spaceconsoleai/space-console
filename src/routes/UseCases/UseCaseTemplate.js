import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams, Navigate } from 'react-router-dom';
import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import SEO from '../../components/SEO';
const useCaseData = {
    'manufacturing': {
        title: 'Manufacturing Operations',
        subtitle: 'Reduce scrap, optimize cycle time, and track carryover.',
        problem: 'Assembly lines produce massive amounts of data, but it’s often siloed in MES, ERP, and Excel sheets. Bottlenecks go unnoticed until end-of-shift.',
        solution: 'SpaceConsole AI connects to your MES flow. AI maps the physical movement of goods. Live Cycle Time and Throughput metrics highlight stalled stations instantly.',
        outcome: 'One automotive supplier reduced line stoppages by 40% in 6 weeks.'
    },
    'service-ops': {
        title: 'Service & Support Operations',
        subtitle: 'Manage ticket flow, prevent SLA breaches, and balance load.',
        problem: 'Tickets pile up in "Pending" status. Support leads don\'t see the breakdown until the weekly report—when it’s too late.',
        solution: 'Visualize the full lifecycle of a ticket. Identify steps with high WIP (Work in Progress). Use "5 Whys" to solve recurring escalation causes.',
        outcome: 'Tech support teams typically see a 25% increase in first-contact resolution.'
    },
    'sales-revops': {
        title: 'Sales & RevOps',
        subtitle: 'Visualize pipeline friction and fix handoff gaps.',
        problem: 'Deals stall between "Qualified" and "Proposal". CRM dashboards show the drop-off, but not *why* it happens.',
        solution: 'Map the actual sales motion. See where reps spend too much time. Detect process gaps between Sales and Customer Success.',
        outcome: 'RevOps teams use SpaceConsole AI to shorten sales cycles by an average of 14 days.'
    },
    'marketing': {
        title: 'Marketing Operations',
        subtitle: 'Optimize campaign velocity and content production.',
        problem: 'Creative requests get lost in email threads. Approvals take forever. Nobody knows the true capacity of the design team.',
        solution: 'Turn your creative workflow into a measurable system. Track time-to-market for assets. Identify approval bottlenecks.',
        outcome: 'Marketing teams deliver campaigns 30% faster with clear visibility.'
    }
};
export default function UseCaseTemplate() {
    const { slug } = useParams();
    const data = slug ? useCaseData[slug] : null;
    if (!data) {
        return _jsx(Navigate, { to: "/use-cases", replace: true });
    }
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `${data.title} | Space Console AI`, description: data.subtitle }), _jsxs(Section, { style: { paddingTop: '8rem', textAlign: 'center' }, children: [_jsx("p", { style: { color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }, children: "Use Case" }), _jsx("h1", { style: { fontSize: '3rem', marginBottom: '1rem' }, children: data.title }), _jsx("p", { style: { fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }, children: data.subtitle }), _jsx("div", { style: { marginTop: '2rem' }, children: _jsxs(Button, { to: "/book-demo", children: ["Get a Demo for ", data.title.split(' ')[0]] }) })] }), _jsx(Section, { children: _jsxs("div", { style: { display: 'grid', gap: '4rem' }, children: [_jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }, children: [_jsxs("div", { children: [_jsx("h2", { style: { fontSize: '2rem', marginBottom: '1rem' }, children: "The Problem" }), _jsx("p", { style: { fontSize: '1.1rem', lineHeight: 1.6 }, children: data.problem })] }), _jsxs(Card, { className: "glass-panel", style: { padding: '2rem' }, children: [_jsx("h3", { style: { marginBottom: '1rem' }, children: "Common Pains" }), _jsxs("ul", { style: { paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-secondary)' }, children: [_jsx("li", { children: "Lack of visibility" }), _jsx("li", { children: "Manual reporting" }), _jsx("li", { children: "Reactive fire-fighting" })] })] })] }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }, children: [_jsx(Card, { className: "glass-panel", style: { order: 1, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: _jsx("p", { style: { color: 'var(--color-text-secondary)' }, children: "[Solution Diagram Placeholder]" }) }), _jsxs("div", { style: { order: 2 }, children: [_jsx("h2", { style: { fontSize: '2rem', marginBottom: '1rem' }, children: "How SpaceConsole AI Helps" }), _jsx("p", { style: { fontSize: '1.1rem', lineHeight: 1.6 }, children: data.solution })] })] })] }) }), _jsx(Section, { style: { background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }, children: _jsxs("div", { style: { textAlign: 'center', maxWidth: '800px', margin: '0 auto' }, children: [_jsx("h3", { style: { fontSize: '1.5rem', marginBottom: '1rem' }, children: "Typical Outcome" }), _jsxs("p", { style: { fontSize: '1.25rem', fontWeight: 'bold' }, children: ["\"", data.outcome, "\""] })] }) }), _jsxs(Section, { style: { textAlign: 'center', paddingBottom: '6rem' }, children: [_jsxs("h2", { children: ["Ready to optimize your ", data.title, "?"] }), _jsx("div", { style: { marginTop: '2rem' }, children: _jsx(Button, { to: "/book-demo", children: "Start Mapping Now" }) })] })] }));
}
