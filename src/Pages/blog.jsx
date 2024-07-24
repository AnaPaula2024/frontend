import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedPosts from '../components/FeaturedPosts';
import Categories from '../components/Categories';
import styles from '../assets/css/Blog.module.css'; 

const Blog = () => {
    // Dados para posts em destaque
    const featuredPostsData = [
        {
            image: 'PNRS.png',  // Nome da imagem consistente com o mapeamento no FeaturedPosts
            title: 'PNRS: o que a lei estabelece sobre o descarte de eletrônicos?',
            description: 'A Política Nacional de Resíduos Sólidos tem uma importância imensa para dar fim a sucateiras.',
            link: 'post1.html'
        },
        {
            image: 'ISO.png',  // Nome da imagem consistente com o mapeamento no FeaturedPosts
            title: 'ISO 9001 e 14001: quais as obrigatoriedades impostas pelas normas para descarte de resíduos eletrônicos?',
            description: 'As normas ISO 9001 e 14001 têm um impacto direto nas práticas de gestão de resíduos eletrônicos.',
            link: 'post2.html'
        }
    ];

    useEffect(() => {
        function setupScrollAnimations() {
            const elementsToAnimate = document.querySelectorAll('.animate');
            const checkAnimation = () => {
                elementsToAnimate.forEach(element => {
                    if (element.getBoundingClientRect().top < window.innerHeight) {
                        element.classList.add('visible');
                    }
                });
            };

            window.addEventListener('scroll', checkAnimation);
            checkAnimation(); // Check initially
            return () => window.removeEventListener('scroll', checkAnimation);
        }

        setupScrollAnimations();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <FeaturedPosts posts={featuredPostsData} /> {/* Apenas exibe posts em destaque */}
                <Categories />
            </main>
            <Footer />
        </>
    );
};

export default Blog;
