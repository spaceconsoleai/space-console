import React, { ReactNode, HTMLAttributes } from 'react';
interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    id?: string;
}
declare const Section: React.FC<SectionProps>;
export default Section;
