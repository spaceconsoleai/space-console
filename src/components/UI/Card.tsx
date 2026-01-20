import React, { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, ...props }) => {
    return (
        <div className={`${styles.card} glass-panel ${className}`} {...props}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
