import Section from '../../../components/UI/Section';
import Card from '../../../components/UI/Card';
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
    return (
        <Section>
            <div className={styles.grid}>
                <div className={styles.textColumn}>
                    <h2 className={styles.heading}>
                        Dashboards show numbers. <br />
                        Diagrams show intent. <br />
                        <span className={styles.highlight}>We show reality.</span>
                    </h2>
                    <p className={styles.copy}>
                        Most tools give you one or the other. SpaceConsole AI connects your live data
                        to your actual process flow, giving you the context that raw dashboards lack
                        and the accuracy that static diagrams lose.
                    </p>
                </div>

                <div className={styles.visualColumn}>
                    <Card className={styles.comparisonCard}>
                        <div className={styles.comparisonHeader}>The SpaceConsole AI Way</div>
                        <div className={styles.comparisonContent}>
                            <div className={styles.node}>Data</div>
                            <div className={styles.link}>+</div>
                            <div className={styles.node}>Process Context</div>
                            <div className={styles.link}>=</div>
                            <div className={`${styles.node} ${styles.result}`}>Actionable Reality</div>
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
