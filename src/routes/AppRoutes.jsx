import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../Pages/blog.jsx';
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
// import Login from '../pages/Login';
import BlogPostPage from '../Pages/BlogPostPage.jsx';


const AppRoutes = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/post/:id" element={<BlogPostPage />} />

            </Routes>
        </ScrollToTop>
    );
};

export default AppRoutes;
