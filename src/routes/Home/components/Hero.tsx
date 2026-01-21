import Button from '../../../components/UI/Button';
import Section from '../../../components/UI/Section';
import styles from './Hero.module.css';
import bannerDark from '../../../assets/banner_spaceconsole.png'; // default/dark
import bannerLight from '../../../assets/banner_white.png'; // light
import { useTheme } from '../../../context/ThemeContext';

export default function Hero() {
    const { theme } = useTheme();

    return (
        <Section className={styles.heroSection}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Turn your process into a <span className={styles.gradientText}>live system</span>.
                </h1>
                <p className={styles.subtitle}>
                    Map it with AI. Measure it with live data. Fix it with guided problem solving.
                    Stop managing via spreadsheets and static diagrams.
                </p>
                <div className={styles.actions}>
                    <Button to="/book-demo" variant="primary" className={styles.cta}>
                        Book a Demo
                    </Button>
                    <Button to="/product" variant="secondary">
                        See how it works
                    </Button>
                </div>
            </div>

            {/* Banner Image */}
            <div className={`${styles.visualPlaceholder} glass-panel`} style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3rem auto', maxWidth: '1200px', width: '100%' }}>
                <img
                    src={theme === 'dark' ? bannerDark : bannerLight}
                    alt="SpaceConsole AI Platform"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>
        </Section>
    );
}
