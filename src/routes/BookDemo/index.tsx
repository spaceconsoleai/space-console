import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import styles from './BookDemo.module.css';
import SEO from '../../components/SEO';

export default function BookDemo() {
    return (
        <>
            <SEO
                title="Book a Demo | See SpaceConsole AI in Action"
                description="Schedule a personalized demo. See how AI process mapping can transform your operations."
            />
            <Section style={{ paddingTop: '6rem' }}>
                <div className={styles.container}>
                    <div className={styles.textColumn}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>See your process in a new light.</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                            Schedule a personalized demo with our team. We&apos;ll show you how AI can map your workflow in minutes.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>What to expect:</h3>
                            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-secondary)' }}>
                                <li>15-min discovery of your current bottlenecks</li>
                                <li>Live demo of AI mapping (SpaceConsole AI)</li>
                                <li>Specific use-case examples matching your industry</li>
                                <li>Q&A on security and integration</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <Card className="glass-panel" style={{ padding: '2rem' }}>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.field}>
                                    <label>Work Email</label>
                                    <input type="email" placeholder="name@company.com" required />
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label>First Name</label>
                                        <input type="text" placeholder="Jane" required />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label>Company Name</label>
                                    <input type="text" placeholder="Acme Inc" required />
                                </div>

                                <div className={styles.field}>
                                    <label>Role</label>
                                    <select>
                                        <option value="">Select...</option>
                                        <option value="ops">Operations Leader</option>
                                        <option value="product">Product Manager</option>
                                        <option value="engineering">Engineering/DevOps</option>
                                        <option value="executive">Executive</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label>Anything specific you&apos;d like to see?</label>
                                    <textarea rows={3} placeholder="e.g. How to map a Jira workflow..."></textarea>
                                </div>

                                <Button type="submit" style={{ width: '100%', marginTop: '1rem' }}>Request Demo</Button>
                                <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-secondary)' }}>
                                    We&apos;ll be in touch within 1 business day.
                                </p>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
}
