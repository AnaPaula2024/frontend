
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/Main'; 

const PrivacyPage = () => {
    return (
        <div className="app">
            <Header />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default PrivacyPage;
