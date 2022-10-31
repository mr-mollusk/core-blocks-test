import React from 'react';
import Accordion from 'src/components/Accordion/Accordion';
import Typography from 'src/components/Typography/Typography';
import { accordionsTexts } from 'src/data/mock';
import styles from './Faq.module.css';

const FAQ: React.FC = () => {
    return (
        <section className={styles.faq}>
            <div className={styles.faq__title}>
                <Typography theme="xl-4" weight="extrabold">
                    FAQ
                </Typography>
            </div>
            <div className={styles.faq__subtitle}>
                <Typography theme="lg" weight="regular">
                    Popular questions.
                </Typography>
            </div>
            <div className={styles.faq__accordions}>
                {accordionsTexts.map((element) => {
                    return (
                        <Accordion
                            key={element.id}
                            title={element.title}
                            content={element.content}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
