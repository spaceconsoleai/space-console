import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../../../components/UI/Section';
import Card from '../../../components/UI/Card';
import styles from './Features.module.css';
const features = [
    {
        title: 'AI Process Mapping',
        desc: 'Text-to-map in seconds. Describe the workflow, get a standard BPMN structure.'
    },
    {
        title: 'Live KPIs',
        desc: 'Cycle time, lead time, throughput, WIP, SLA health—per step, per team, over time.'
    },
    {
        title: 'Bottleneck Detection',
        desc: 'Traffic lights for your workflow. See exactly where work piles up.'
    },
    {
        title: 'Guided Problem Solving',
        desc: 'Run 5 Whys, Fishbone, A3 with evidence attached directly to the process step.'
    }
];
export default function Features() {
    return (_jsx(Section, { children: _jsxs("div", { className: styles.grid, children: [_jsxs("div", { className: styles.header, children: [_jsx("h2", { children: "Why SpaceConsole AI?" }), _jsx("p", { children: "Everything you need to optimize operations." })] }), _jsx("div", { className: styles.cards, children: features.map((f) => (_jsx(Card, { title: f.title, className: styles.featureCard, children: _jsx("p", { children: f.desc }) }, f.title))) })] }) }));
}
