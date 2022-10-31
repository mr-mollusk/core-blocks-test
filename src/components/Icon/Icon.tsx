import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.css';

export type IconColors = 'purple' | 'yellow' | 'blue';

export type IconProps = {
    color: IconColors;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
    children,
    color,
}) => {
    return <div className={clsx(styles.icon, styles[color])}>{children}</div>;
};

export default Icon;
