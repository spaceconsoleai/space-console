import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../../../components/UI/Section';
import styles from './HowItWorks.module.css';
const steps = [
    {
        num: '01',
        title: 'Map',
        desc: 'Describe your process. AI draws the map.'
    },
    {
        num: '02',
        title: 'Connect',
        desc: 'Link CSVs or APIs. Data flows into the steps.'
    },
    {
        num: '03',
        title: 'Measure',
        desc: 'See Cycle Time, WIP, and Throughput light up.'
    },
    {
        num: '04',
        title: 'Improve',
        desc: 'Click a red step. Start a 5-Whys session.'
    }
];
export default function HowItWorks() {
    return (_jsxs(Section, { children: [_jsx("h2", { className: `section-title ${styles.centerTitle}`, children: "How It Works" }), _jsx("div", { className: styles.stepsGrid, children: steps.map((step) => (_jsxs("div", { className: styles.step, children: [_jsx("div", { className: styles.number, children: step.num }), _jsx("h3", { className: styles.stepTitle, children: step.title }), _jsx("p", { className: styles.stepDesc, children: step.desc })] }, step.num))) })] }));
}
