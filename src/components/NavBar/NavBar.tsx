import React, { useEffect, useState } from 'react';
import { links } from 'src/data/mock';
import NavLink from '../Link/NavLink';
import Typography from '../Typography/Typography';
import styles from './NavBar.module.css';
import UnionWhite from '../../assets/svg/union_white.svg';
import UnionBlack from '../../assets/svg/union_black.svg';
import clsx from 'clsx';

export type NavBarProps = {
    burgerHandler: () => void;
    isTitleVisible: boolean;
    isMenuActive: boolean;
};

const NavBar: React.FC<NavBarProps> = ({
    burgerHandler,
    isTitleVisible,
    isMenuActive,
}) => {
    return (
        <nav className={clsx(styles.navbar, !isTitleVisible && styles.black)}>
            <div className={styles.logo}>
                {isTitleVisible ? <UnionWhite /> : <UnionBlack />}
                <Typography
                    theme="base"
                    weight="bold"
                    color={isTitleVisible && 'white'}
                >
                    Company
                </Typography>
            </div>
            <div
                className={clsx(
                    styles.burger,
                    !isTitleVisible && styles.black__burger,
                )}
                onClick={burgerHandler}
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
            >
                <span> </span>
                <span> </span>
                <span> </span>
            </div>

            <div className={styles.navlinks}>
                {links.map((link) => (
                    <NavLink
                        href="#"
                        key={link.id}
                        color={isTitleVisible && 'white'}
                    >
                        {link.text}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
