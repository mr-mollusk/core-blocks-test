/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import Typography from '../Typography/Typography';
import styles from './NavLink.module.css';

export type LinkColors = 'white' | 'black';

export type LinkProps = {
    href: string;
    color?: LinkColors;
    menu?: boolean;
};

const Anchor = React.forwardRef<
    HTMLAnchorElement,
    React.PropsWithChildren<any>
>(({ href, color, menu, children }, ref) => (
    <a ref={ref} href={href} className={styles.navlink}>
        <Typography
            theme={menu ? 'header' : 'base'}
            weight="medium"
            color={color}
            align="center"
            tag="span"
        >
            {children}
        </Typography>
    </a>
));

const NavLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
    children,
    color = 'white',
    href,
    menu = false,
}) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <Anchor color={color} menu={menu}>
                {children}
            </Anchor>
        </Link>
    );
};

export default NavLink;
