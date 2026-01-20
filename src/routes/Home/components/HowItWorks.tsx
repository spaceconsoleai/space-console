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
    return (
        <Section>
            <h2 className={`section-title ${styles.centerTitle}`}>How It Works</h2>
            <div className={styles.stepsGrid}>
                {steps.map((step) => (
                    <div key={step.num} className={styles.step}>
                        <div className={styles.number}>{step.num}</div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
