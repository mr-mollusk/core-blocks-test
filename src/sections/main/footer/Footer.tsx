import Image from 'next/image';
import React from 'react';
import NavLink from 'src/components/Link/NavLink';
import Typography from 'src/components/Typography/Typography';
import { footerContent } from 'src/data/mock';
import styles from './Footer.module.css';
import Union from '../../../assets/svg/union_black.svg';
import google from '../../../assets/img/google_store.png';
import apple from '../../../assets/img/app_store.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__line}> </div>
            <div className={styles.footer__company}>
                <div className={styles.footer__logo}>
                    <Union />
                    <Typography theme="base" weight="bold">
                        Company
                    </Typography>
                </div>
                <Typography theme="base" weight="medium" transparent>
                    © 2099 Company
                </Typography>
            </div>

            <div className={styles.footer__links}>
                {footerContent.map((footerBlock) => (
                    <div key={footerBlock.id} className={styles.links__block}>
                        <Typography theme="sm" weight="medium" transparent>
                            {footerBlock.title}
                        </Typography>
                        {footerBlock.links.map((link) => (
                            <div className={styles.footer__item} key={link.id}>
                                <NavLink href="#" color="black">
                                    {link.text}
                                </NavLink>
                                {link.new && (
                                    <div className={styles.footer__badge}>
                                        <Typography weight="bold" color="pink">
                                            New
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.img__block}>
                <Typography theme="sm" weight="medium" transparent>
                    Get the app
                </Typography>
                <div className={styles.footer__image}>
                    <Image src={google} alt="google" />
                </div>
                <div className={styles.footer__image}>
                    <Image src={apple} alt="apple" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
