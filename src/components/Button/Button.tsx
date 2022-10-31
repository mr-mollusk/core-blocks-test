import clsx from 'clsx';
import React from 'react';
import Typography from '../Typography/Typography';
import styles from './Button.module.css';

export type ButtonVariants = 'basic' | 'text';

export type ButtonProps = {
    variant?: ButtonVariants;
    className?: string;
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = '',
    variant = 'basic',
}) => {
    return (
        <button
            type="button"
            className={clsx(styles.button, className, styles[variant])}
        >
            <Typography theme="lg" weight="semibold" color="white">
                {children}
            </Typography>
        </button>
    );
};

export default Button;
