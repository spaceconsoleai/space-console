import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button'; // Fixed import path
import Card from '../../components/UI/Card';
import SEO from '../../components/SEO';

export default function Product() {
    return (
        <>
            <SEO
                title="SpaceConsole AI Features | AI Process Mapping & value stream management"
                description="Explore SpaceConsole AI features: AI-generated maps, real-time metrics, and structured problem-solving tools for operations teams."
            />
            <Section style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The Operating System for Operations</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    A complete toolkit to visualize, monitor, and improve any workflow.
                </p>
                <Button to="/book-demo">Book a Demo</Button>
            </Section>

            <Section>
                <div style={{ display: 'grid', gap: '4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Documentation that writes itself</h2>
                            <p>Stop spending weeks in Visio. Just describe how you work, and our AI generates a standard BPMN-style map.</p>
                        </div>
                        <Card className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: 'var(--color-text-secondary)' }}>[AI Process Map Visual]</p>
                        </Card>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <Card className="glass-panel" style={{ order: 1, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: 'var(--color-text-secondary)' }}>[Live Data Overlay Visual]</p>
                        </Card>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your map, alive with data</h2>
                            <p>Don&apos;t just look at boxes and arrows. See how many items are currently in "Review" and how long they&apos;ve been there.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Fix issues where they happen</h2>
                            <p>When a metric turns red, SpaceConsole AI prompts your team to investigate. Log root causes and track improvements directly on the map.</p>
                        </div>
                        <Card className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ color: 'var(--color-text-secondary)' }}>[Problem Solving UI Visual]</p>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section style={{ textAlign: 'center', paddingBottom: '6rem' }}>
                <h2>Ready to upgrade your operations?</h2>
                <div style={{ marginTop: '2rem' }}>
                    <Button to="/book-demo">See the product in action</Button>
                </div>
            </Section>
        </>
    );
}
