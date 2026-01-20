import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const cases = [
    {
        slug: 'manufacturing',
        title: 'Manufacturing',
        desc: 'Reduce scrap and cycle time. Track physical goods through your plant.'
    },
    {
        slug: 'service-ops',
        title: 'Service / Support',
        desc: 'Manage ticket flow and SLA breaches. Visualize support escalations.'
    },
    {
        slug: 'sales-revops',
        title: 'Sales / RevOps',
        desc: 'Visualize pipeline friction. See where deals get stuck.'
    },
    {
        slug: 'marketing',
        title: 'Marketing',
        desc: 'Optimize campaign velocity and content production workflows.'
    }
];

export default function UseCases() {
    return (
        <>
            <SEO
                title="Use Cases | Space Console AI for Every Team"
                description="See how Manufacturing, Service, Sales, and Marketing teams use SpaceConsole AI to optimize workflows."
            />
            <Section style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Built for complex, high-volume processes</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>See how teams like yours use SpaceConsole AI.</p>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {cases.map((c) => (
                        <Link key={c.slug} to={`/use-cases/${c.slug}`} style={{ textDecoration: 'none' }}>
                            <Card className="glass-panel" style={{ height: '100%', padding: '2rem', transition: 'transform 0.2s', cursor: 'pointer' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>{c.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{c.desc}</p>
                                <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>Read more →</div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section style={{ textAlign: 'center' }}>
                <p>Don&apos;t see your use case?</p>
                <div style={{ marginTop: '1rem' }}>
                    <Button to="/contact" variant="secondary">Contact Us</Button>
                </div>
            </Section>
        </>
    );
}
