// pages/PrivacyPolicyPage.js
import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../assets/css/privacy-policy.module.css';
import 'animate.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/responsive-policy.css';

const PrivacyPolicyPage = () => {
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
