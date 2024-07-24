import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../Pages/blog.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Blog />} />
            {/* Adicione outras rotas aqui conforme necessário */}
        </Routes>
    );
};

export default AppRoutes;
