import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import SEO from '../../components/SEO';

export default function Pricing() {
    return (
        <>
            <SEO
                title="Pricing | Scalable Plans for Space Console AI"
                description="Simple pricing for teams of all sizes. Start mapping for free, scale with enterprise security and integrations."
            />
            <Section style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, transparent pricing</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>Start mapping for free, scale with enterprise security.</p>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Starter */}
                    <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Starter</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>From $49<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Perfect for small teams.</p>
                        <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>5 Maps</li>
                            <li>CSV Upload</li>
                            <li>Standard Support</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <Button to="/book-demo" variant="secondary" style={{ width: '100%' }}>Start Trial</Button>
                        </div>
                    </Card>

                    {/* Team */}
                    <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderColor: 'var(--color-primary)' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Team</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>From $149<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
                        <p style={{ color: 'var(--color-text-secondary)' }}>For growing operations.</p>
                        <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Unlimited Maps</li>
                            <li>API Access</li>
                            <li>Priority Support</li>
                            <li>Team Roles</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <Button to="/book-demo" variant="primary" style={{ width: '100%' }}>Get/Start Team</Button>
                        </div>
                    </Card>

                    {/* Enterprise */}
                    <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Enterprise</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Custom</div>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Security & control at scale.</p>
                        <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>SSO (SAML/OIDC)</li>
                            <li>Audit Logs</li>
                            <li>Dedicated Success Manager</li>
                            <li>VPC Peering</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <Button to="/book-demo" variant="secondary" style={{ width: '100%' }}>Request Quote</Button>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Card style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Can I start for free?</h4>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Yes, we offer a 14-day free trial on all plans.</p>
                    </Card>
                    <Card style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>What counts as a "Map"?</h4>
                        <p style={{ color: 'var(--color-text-secondary)' }}>A map is a single value stream or workflow diagram. You can have unlimited steps within a map.</p>
                    </Card>
                </div>
            </Section>
        </>
    );
}
