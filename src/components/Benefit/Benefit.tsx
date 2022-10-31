import React from 'react';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import styles from './Benefit.module.css';

export type BenefitColors = 'purple' | 'yellow' | 'blue';

export type BenefitProps = {
    color: BenefitColors;
    title: string;
    content: string;
};

const Benefit: React.FC<React.PropsWithChildren<BenefitProps>> = ({
    color,
    title,
    content,
    children,
}) => {
    return (
        <div className={styles.benefit}>
            <div className={styles.icon}>
                <Icon color={color}>{children}</Icon>
            </div>
            <div className={styles.title}>
                <Typography theme="xl" weight="bold" align="center">
                    {title}
                </Typography>
            </div>

            <Typography theme="lg" weight="regular" align="center">
                {content}
            </Typography>
        </div>
    );
};

export default Benefit;
