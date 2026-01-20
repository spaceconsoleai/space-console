import Section from '../../components/UI/Section';

export default function Privacy() {
    return (
        <Section style={{ paddingTop: '8rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Last updated: January 2026</p>

            <div style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                <p style={{ marginBottom: '1rem' }}>
                    This is a placeholder for the Privacy Policy of Space Console AI.
                </p>
                <p>
                    [Standard legal boilerplate regarding data collection, usage, cookies, and user rights would go here.]
                </p>
            </div>
        </Section>
    );
}
