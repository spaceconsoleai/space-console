import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export default function SEO({ title, description, keywords = [] }) {
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), keywords.length > 0 && (_jsx("meta", { name: "keywords", content: keywords.join(', ') }))] }));
}
