import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useEffect } from 'react';

import Home from './routes/Home';
import Product from './routes/Product';
import UseCases from './routes/UseCases';
import UseCaseTemplate from './routes/UseCases/UseCaseTemplate';
import Pricing from './routes/Pricing';
import Integrations from './routes/Integrations';
import Resources from './routes/Resources';
import Company from './routes/Company';
import BookDemo from './routes/BookDemo';
import Privacy from './routes/Legal/Privacy';
import Terms from './routes/Legal/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/use-cases/:slug" element={<UseCaseTemplate />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
}

export default App;
