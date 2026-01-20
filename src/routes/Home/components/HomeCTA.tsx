import Section from '../../../components/UI/Section';
import Button from '../../../components/UI/Button';
import styles from './HomeCTA.module.css';

export default function HomeCTA() {
    return (
        <Section className={styles.section}>
            <div className={`${styles.container} glass-panel`}>
                <h2>Ready to see your process live?</h2>
                <p>Start mapping your first workflow in minutes.</p>
                <div className={styles.actions}>
                    <Button to="/book-demo" variant="primary">Book a Demo</Button>
                    <Button to="/product" variant="secondary">Tour the Platform</Button>
                </div>
            </div>
        </Section>
    );
}
