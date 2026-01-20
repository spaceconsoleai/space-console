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
    return (
        <Section>
            <div className={styles.grid}>
                <div className={styles.header}>
                    <h2>Why SpaceConsole AI?</h2>
                    <p>Everything you need to optimize operations.</p>
                </div>

                <div className={styles.cards}>
                    {features.map((f) => (
                        <Card key={f.title} title={f.title} className={styles.featureCard}>
                            <p>{f.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
