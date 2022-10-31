import React from 'react';
import Benefit from 'src/components/Benefit/Benefit';
import Typography from 'src/components/Typography/Typography';
import styles from './Headline.module.css';
import Lightning from '../../../assets/svg/lightning.svg';
import Stars from '../../../assets/svg/stars.svg';
import Lock from '../../../assets/svg/lock-closed.svg';

const Headline: React.FC = () => {
    return (
        <section className={styles.root}>
            <div className={styles.root__title}>
                <div className={styles.root__features}>
                    <Typography
                        theme="xl"
                        weight="medium"
                        withBg
                        align="center"
                    >
                        Features to help you do more
                    </Typography>
                </div>
                <div className={styles.root__headline}>
                    <Typography theme="xl-4" weight="bold" align="center">
                        A headline about our features & service
                    </Typography>
                </div>
            </div>
            <div className={styles.root__benefits}>
                <Benefit
                    color="purple"
                    title="Lighting fast"
                    content="Use this text to describe your 
product feature or service."
                >
                    <Lightning />
                </Benefit>
                <Benefit
                    color="yellow"
                    title="Clean design"
                    content="Use this text to describe your 
            product feature or service."
                >
                    <Stars />
                </Benefit>
                <Benefit
                    color="blue"
                    title="Advanced security"
                    content="Use this text to describe your 
            product feature or service."
                >
                    <Lock />
                </Benefit>
            </div>
        </section>
    );
};

export default Headline;
