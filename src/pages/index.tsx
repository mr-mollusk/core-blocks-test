import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import NavBar from 'src/components/NavBar/NavBar';
import Title from 'src/sections/main/title/Title';
import Headline from 'src/sections/main/headline/Headline';
import FAQ from 'src/sections/main/faq/Faq';
import Footer from 'src/sections/main/footer/Footer';
import Menu from 'src/sections/main/menu/Menu';
import clsx from 'clsx';
import styles from './index.module.css';

const Home: NextPage = () => {
    const [isMenuActive, setOsMenuActive] = useState<boolean>(false);
    const burgerHandler = () => {
        setOsMenuActive(!isMenuActive);
    };
    const titleRef = useRef(null);

    const [isTitleVisible, setIsTitleVisible] = useState(false);

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsTitleVisible(entry.isIntersecting);
        }, options);

        if (titleRef.current) observer.observe(titleRef.current);
    }, [options, titleRef, isMenuActive]);

    return (
        <React.Fragment>
            <Head>
                <title>Coreblocks template</title>
                sc
            </Head>

            <NavBar
                burgerHandler={burgerHandler}
                isTitleVisible={isTitleVisible}
                isMenuActive={isMenuActive}
            />

            <Menu isMenuActive={isMenuActive} />

            <Title target={titleRef} />
            <section className={clsx(isMenuActive && styles.none)}>
                <Headline />
                <FAQ />
                <Footer />
            </section>
        </React.Fragment>
    );
};

export default Home;
