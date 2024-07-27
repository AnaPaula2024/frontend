// src/components/NewsCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { postsData } from '../data/newsData';
import styles from '../assets/css/NewsCarousel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Função para filtrar notícias únicas
const getUniqueNews = (data) => {
  const seen = new Set();
  return data.filter(item => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  }).slice(0, 3); // Garante que temos até três notícias
};

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  };

  // Obtém notícias únicas
  const uniquePostsData = getUniqueNews(postsData);

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {uniquePostsData.map(news => (
          <div key={news.id} className={styles.carouselItem}>
            <img src={news.imgSrc} alt={news.title} />
            <div className={styles.carouselContent}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
