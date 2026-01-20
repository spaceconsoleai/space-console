import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
const Layout = ({ children }) => {
    return (_jsxs("div", { className: styles.layout, children: [_jsx(Header, {}), _jsx("main", { className: styles.main, children: children }), _jsx(Footer, {})] }));
};
export default Layout;
