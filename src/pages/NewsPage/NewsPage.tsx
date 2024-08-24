// src/pages/NewsPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NewsPage.css'; // Add your CSS for styling
import newsData from '../../data/newsData'; // Sample news data

const NewsPage: React.FC = () => {
    const { newsId } = useParams<{ newsId: string }>(); // Get the newsId from the URL
    const [currentNews, setCurrentNews] = useState(newsData[0]); // Default to the first news item

    useEffect(() => {
        const newsItem = newsData.find(news => news.id === parseInt(newsId || '0', 10));
        if (newsItem) {
            setCurrentNews(newsItem);
        }
    }, [newsId]);

    const handleGalleryClick = (newsId: number) => {
        window.location.href = `/news/${newsId}`;
    };

    const renderGallery = () => {
        return newsData.slice(-3).map((news) => (
            <div key={news.id} className="gallery-item" onClick={() => handleGalleryClick(news.id)}>
                <img src={news.thumbnail} alt={news.title} />
                <div className="gallery-info">
                    <h3>{news.title}</h3>
                    <p>{news.date}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="news-page-container">
            <h1 className="news-title">News</h1>
            <div className="main-news">
                <img src={currentNews.mainPhoto} alt={currentNews.title} className="main-photo" />
                <h2 className="news-title">{currentNews.title}</h2>
                <p className="news-date">{currentNews.date}</p>
                <p className="news-description">{currentNews.description}</p>
            </div>
            <div className="news-gallery">
                <button className="prev-button">&lt;</button>
                <div className="gallery-items">
                    {renderGallery()}
                </div>
                <button className="next-button">&gt;</button>

            </div>
        </div>
    );
};

export default NewsPage;
