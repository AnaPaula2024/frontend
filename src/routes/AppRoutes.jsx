import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../Pages/blog.jsx';
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

const AppRoutes = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                {/* Outras rotas podem ser adicionadas aqui */}
            </Routes>
        </ScrollToTop>
    );
};

export default AppRoutes;
