import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import SEO from '../../components/SEO';

const connectors = [
    'CSV / Excel', 'Jira', 'ServiceNow', 'Salesforce', 'HubSpot', 'Snowflake', 'PostgreSQL', 'Slack'
];

export default function Integrations() {
    return (
        <>
            <SEO
                title="Integrations | Connect Your Data to SpaceConsole AI"
                description="Connect Excel, CSV, Jira, Salesforce, and more. SpaceConsole AI unifies data from your existing toolstack."
            />
            <Section style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Connect your data, wherever it lives</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    SpaceConsole AI unifies data from your existing toolstack into a single cohesive process view.
                </p>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                    {connectors.map(name => (
                        <Card key={name} className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px' }}>
                            <span style={{ fontWeight: 'bold' }}>{name}</span>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Start Simple</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Don't wait for IT to build an integration. Drag and drop a CSV or Excel export to get started instantly.
                            Our AI maps the columns to process steps automatically.
                        </p>
                        <Button to="/book-demo" variant="secondary">Try with CSV</Button>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Enterprise Security</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            We take security seriously. All data is encrypted in transit (TLS) and at rest.
                            Role-Based Access Control (RBAC) ensures only the right people see sensitive data.
                        </p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-secondary)' }}>
                            <li>Read-only access by default</li>
                            <li>Encrypted in transit & at rest</li>
                            <li>SOC2 Type II (Pending)</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}
