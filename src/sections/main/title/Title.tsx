import Image from 'next/image';
import React from 'react';
import Input from 'src/components/Input/Input';
import Typography from 'src/components/Typography/Typography';
import Button from 'src/components/Button/Button';
import styles from './Title.module.css';
import bg from '../../../assets/img/image.png';
import Star from '../../../assets/svg/rate.svg';

export type TitleProps = { target: any };

const Title: React.FC<TitleProps> = ({ target }) => {
    return (
        <section className={styles.root} ref={target}>
            <div className={styles.root__info}>
                <div className={styles.root__title}>
                    <Typography theme="header" color="white">
                        {'A '}
                        <span style={{ color: 'var(--font-color-3)' }}>
                            headline
                        </span>{' '}
                        to turn visitors into clients
                    </Typography>
                </div>
                <div className={styles.root__subtitle}>
                    <Typography theme="lg" color="white">
                        A descriptive secondary text placeholder to better
                        explain your business offer.
                    </Typography>
                </div>
                <div className={styles.root__inputBox}>
                    <Input placeholder="Enter your email" />
                    <Button>Join the Club</Button>
                </div>
                <div className={styles.root__details}>
                    <div className={styles.root__ratings}>
                        <Typography
                            theme="xl-4"
                            weight="semibold"
                            color="white"
                        >
                            4.9
                        </Typography>
                        <div className={styles.root__star}>
                            <Star />
                        </div>

                        <Typography
                            theme="base"
                            weight="semibold"
                            color="white"
                        >
                            Over 5k positive customer reviews
                        </Typography>
                    </div>
                    <div className={styles.root__transactions}>
                        <Typography
                            theme="xl-4"
                            weight="semibold"
                            color="white"
                        >
                            $2M+
                        </Typography>
                        <Typography
                            theme="base"
                            weight="semibold"
                            color="white"
                        >
                            Global transactions
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={styles.root__blick1}> </div>
            <div className={styles.root__blick2}> </div>
            <div className={styles.root__img}>
                <Image src={bg} alt="bg" />
            </div>
        </section>
    );
};

export default Title;
