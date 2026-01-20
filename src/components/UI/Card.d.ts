import React, { ReactNode, HTMLAttributes } from 'react';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    title?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
