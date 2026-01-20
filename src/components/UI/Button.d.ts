import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass';
    to?: string;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
