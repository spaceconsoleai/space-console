import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import HomeCTA from './components/HomeCTA';
import SEO from '../../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Space Console AI | Turn Operations into Live Systems"
        description="Map your process with AI, measure live KPIs, and fix bottlenecks. SpaceConsole AI transforms static workflows into real-time operational systems."
        keywords={['AI process mapping', 'value stream management', 'operational excellence', 'workflow optimization', 'bottleneck detection']}
      />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <HomeCTA />
    </>
  );
}
