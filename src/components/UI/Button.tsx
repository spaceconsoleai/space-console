import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass';
    to?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    to,
    className = '',
    ...props
}) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
