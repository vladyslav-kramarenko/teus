// src/pages/NewsPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewsPage.css'; // Add your CSS for styling
import newsData from '../../data/newsData'; // Sample news data

const NewsPage: React.FC = () => {
    const { newsId } = useParams<{ newsId: string }>(); // Get the newsId from the URL
    const navigate = useNavigate();
    const [currentNews, setCurrentNews] = useState(newsData[0]); // Default to the first news item
    const [currentIndex, setCurrentIndex] = useState(newsData.length - 3); // Show the last 3 items by default

    useEffect(() => {
        const newsItem = newsData.find(news => news.id === parseInt(newsId || '0', 10));
        if (newsItem) {
            setCurrentNews(newsItem);
        }
    }, [newsId]);

    const handleGalleryClick = (newsId: number) => {
        navigate(`/news/${newsId}`);
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, newsData.length - 3));
    };

    const renderGallery = () => {
        return newsData.slice(currentIndex, currentIndex + 3).map((news) => (
            <div key={news.id} className="gallery-item" onClick={() => handleGalleryClick(news.id)}>
                <img src={news.thumbnail} alt={news.title} />
                <div className="gallery-info">
                    <h3>{news.title}</h3>
                    <p className={"date-box"}>{news.date}</p>
                </div>
            </div>
        ));
    };

    return (
        <section className="news-section">
            <div className="news-page-container">
                <h1 className="news-title">News</h1>
                <div className="main-news">
                    <img src={currentNews.mainPhoto} alt={currentNews.title} className="main-photo" />
                    <h2 className="news-title">{currentNews.title}</h2>
                    <p className={"date-box"}>{currentNews.date}</p>
                    <p className="news-description">{currentNews.description}</p>
                </div>
                <div className="news-gallery">
                    <button className="prev-button prev-button-news" onClick={handlePrevClick}>&lt;</button>
                    <div className="gallery-items">
                        {renderGallery()}
                    </div>
                    <button className="next-button next-button-news" onClick={handleNextClick}>&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default NewsPage;
