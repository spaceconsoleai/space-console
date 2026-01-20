import React, { ReactNode, HTMLAttributes } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, ...props }) => {
    return (
        <section id={id} className={`${styles.section} ${className}`} {...props}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};

export default Section;
