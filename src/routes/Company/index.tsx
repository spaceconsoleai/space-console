import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import SEO from '../../components/SEO';

export default function Company() {
    return (
        <>
            <SEO
                title="About Space Console AI"
                description="We are building the future of operational intelligence. Contact us."
            />
            <Section style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>We build tools for the people who run the world&apos;s operations.</h1>
            </Section>

            <Section>
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        At Space Console, we believe that every process—whether it's building a car, resolving a support ticket, or closing a sale—is a system.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        For too long, operations teams have been forced to choose between static diagrams (which are easy to understand but outdated)
                        and complex dashboards (which are live but lack context).
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We built SpaceConsole AI to bridge that gap. By combining AI-generated maps with live data,
                        we bring scientific rigidity and real-time visibility to every process.
                    </p>
                </div>
            </Section>

            <Section style={{ textAlign: 'center', paddingBottom: '6rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get in Touch</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Have questions? Interested in a partnership?
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>hello@space-console.com</p>
                <Button to="/book-demo">Book a Demo</Button>
            </Section>
        </>
    );
}
