import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedPosts from '../components/FeaturedPosts';
import Categories from '../components/Categories';
import ScrollToTopButton from '../components/ScrollToTopButton';
import styles from '../assets/css/Blog.module.css';
import 'animate.css';
import '../styles/responsive-blog.css'

const Blog = () => {
    const featuredPostsData = [
        {
            image: 'PNRS.png',
            title: 'PNRS: o que a lei estabelece sobre o descarte de eletrônicos?',
            description: 'A Política Nacional de Resíduos Sólidos tem uma importância imensa para dar fim a sucateiras.',
            link: 'post1.html'
        },
        {
            image: 'ISO.png',
            title: 'ISO 9001 e 14001: quais as obrigatoriedades impostas pelas normas para descarte de resíduos eletrônicos?',
            description: 'As normas ISO 9001 e 14001 têm um impacto direto nas práticas de gestão de resíduos eletrônicos.',
            link: 'post2.html'
        }
    ];

    return (
        <>
            <Header className="animate__animated animate__fadeIn" />
            <main className={`${styles.main} animate__animated animate__fadeIn`}>
                <FeaturedPosts posts={featuredPostsData} />
                <Categories />
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default Blog;
