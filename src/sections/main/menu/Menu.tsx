import clsx from 'clsx';
import React from 'react';
import { links } from 'src/data/mock';
import NavLink from '../../../components/Link/NavLink';
import styles from './Menu.module.css';

export type MenuProps = {
    isMenuActive: boolean;
};

const Menu: React.FC<MenuProps> = ({ isMenuActive }) => {
    return (
        <menu className={clsx(styles.menu, isMenuActive && styles.active)}>
            <div className={styles.container}>
                {links.map((link) => (
                    <NavLink href="#" key={link.id} menu>
                        {link.text}
                    </NavLink>
                ))}
            </div>
            <div className={styles.blick1}> </div>
            <div className={styles.blick2}> </div>
        </menu>
    );
};

export default Menu;
