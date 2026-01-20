import Section from '../../../components/UI/Section';
import styles from './SocialProof.module.css';

export default function SocialProof() {
    return (
        <Section className={styles.section}>
            <p className={styles.label}>Trusted by forward-thinking operations teams</p>
            <div className={styles.logos}>
                {/* Text placeholders for logos as per MVP */}
                <span className={styles.logoPlaceholder}>Acme Corp</span>
                <span className={styles.logoPlaceholder}>Global Logistics</span>
                <span className={styles.logoPlaceholder}>DevOps Inc</span>
                <span className={styles.logoPlaceholder}>Streamline Mfg</span>
                <span className={styles.logoPlaceholder}>FastTrack</span>
            </div>
        </Section>
    );
}
