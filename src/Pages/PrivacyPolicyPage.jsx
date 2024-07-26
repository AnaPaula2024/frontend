import React, { useEffect } from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';
import Header from '../components/HeaderPolitics';
import styles from '../assets/css/privacy-policy.module.css';
import 'animate.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/responsive-policy.css';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        const header = document.querySelector('header');
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.classList.remove('hidden');
                return;
            }

            if (currentScroll > lastScroll) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header className="animate__animated animate__fadeIn" />
            <main className={`${styles.main} animate__animated animate__fadeIn`}>
                <PrivacyPolicy />
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default PrivacyPolicyPage;
