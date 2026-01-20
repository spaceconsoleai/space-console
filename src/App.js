import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(Layout, { children: [_jsx(ScrollToTop, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/product", element: _jsx(Product, {}) }), _jsx(Route, { path: "/use-cases", element: _jsx(UseCases, {}) }), _jsx(Route, { path: "/use-cases/:slug", element: _jsx(UseCaseTemplate, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/integrations", element: _jsx(Integrations, {}) }), _jsx(Route, { path: "/resources", element: _jsx(Resources, {}) }), _jsx(Route, { path: "/company", element: _jsx(Company, {}) }), _jsx(Route, { path: "/book-demo", element: _jsx(BookDemo, {}) }), _jsx(Route, { path: "/legal/privacy", element: _jsx(Privacy, {}) }), _jsx(Route, { path: "/legal/terms", element: _jsx(Terms, {}) })] })] }));
}
export default App;
