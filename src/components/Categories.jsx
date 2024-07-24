// src/components/Categories.jsx

import React from 'react';
import Post from './Post';
import styles from '../assets/css/Categories.module.css'; 

// Importa as imagens
import image1 from '../assets/img/Descarte.png';
import image2 from '../assets/img/SemanadoAmbiente.png';
import image3 from '../assets/img/OWL.png';
import image4 from '../assets/img/reciclagem-de-eletronicos.jpg';

const Categories = () => {
    const posts = [
        {
            imgSrc: image1,
            title: 'Descarte de eletrônicos: descubra 4 categorias de equipamentos que devem ser descartados nas empresas',
            description: 'Entenda quais são os equipamentos eletrônicos que não podem ser descartados no lixo comum.',
            link: '/post3'
        },
        {
            imgSrc: image2,
            title: 'Semana do Meio Ambiente 2024',
            description: 'Junte-se a nós na Semana do Meio Ambiente 2024 enquanto exploramos novas formas de preservar nosso planeta.',
            link: '/post4'
        },
        {
            imgSrc: image3,
            title: 'OWL: Livre seu escritório dos resíduos eletrônicos',
            description: 'Saiba como a OWL ajuda a reutilizar resíduos eletrônicos de forma responsável.',
            link: '/post5'
        },
        {
            imgSrc: image4,
            title: 'Reciclagem de Eletrônicos: Dicas para uma Reciclagem Sustentável',
            description: 'Descubra como reciclar seus eletrônicos de forma sustentável e responsável, ajudando a reduzir o impacto ambiental.',
            link: '/post6'
        },
    ];

    return (
        <section className={styles.categories}>
            <h2>Categorias</h2>
            <div className={styles.posts}>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        imgSrc={post.imgSrc}
                        title={post.title}
                        description={post.description}
                        link={post.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Categories;
