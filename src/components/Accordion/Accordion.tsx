import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './Accordion.module.css';
import Chevron from '../../assets/svg/chevron.svg';

export type AccordionProps = {
    title: string;
    content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleAccordion = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <div className={clsx(styles.accordion, open && styles.openedAccordion)}>
            <div
                className={styles.title}
                onClick={toggleAccordion}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <Typography theme="lg" weight="semibold">
                    {title}
                </Typography>
                <div className={styles.chevron}>
                    <Chevron />
                </div>
            </div>

            <div className={clsx(styles.content)}>
                <Typography theme="lg" weight="regular">
                    {content}
                </Typography>
            </div>
        </div>
    );
};

export default Accordion;
