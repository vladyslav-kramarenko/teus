import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewsPage.css';
import axios from 'axios';
import TextFormatter from "../../components/TextFormatter";

const CMS_URL = process.env.REACT_APP_CMS_URL;

const NewsPage: React.FC = () => {
    const { articleURL } = useParams<{ articleURL: string }>();
    const navigate = useNavigate();
    const [currentNews, setCurrentNews] = useState<any>(null);
    const [newsData, setNewsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(window.innerWidth <= 600 ? 2 : 3);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchNewsData = async () => {
        try {
            const response = await axios.get(`${CMS_URL}/api/articles?populate=*`);
            setNewsData(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching news data:', error);
            setLoading(false);
        }
    };

    // Effect to fetch news data on component mount
    useEffect(() => {
        fetchNewsData();
    }, []);

    // Update itemsToShow and currentIndex when newsData or window size changes
    useEffect(() => {
        const updateGallery = () => {
            const isMobile = window.innerWidth <= 600;
            const newItemsToShow = isMobile ? 2 : 3;
            setItemsToShow(newItemsToShow);
            setCurrentIndex((prevIndex) => {
                const maxIndex = Math.max(newsData.length - newItemsToShow, 0);
                return Math.min(prevIndex, maxIndex);
            });
        };

        updateGallery(); // Initial call

        window.addEventListener('resize', updateGallery);
        return () => {
            window.removeEventListener('resize', updateGallery);
        };
    }, [newsData]);

    // Update currentNews when articleURL or newsData changes
    useEffect(() => {
        if (articleURL && newsData.length > 0) {
            const newsItem = newsData.find((news) => news.url === articleURL);
            if (newsItem) {
                setCurrentNews(newsItem);
            } else {
                setCurrentNews(null);
            }
        }
    }, [articleURL, newsData]);

    const handleGalleryClick = (url: string) => {
        navigate(`/news/${url}`);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, newsData.length - itemsToShow));
    };

    const renderGallery = () => {
        return newsData.slice(currentIndex, currentIndex + itemsToShow).map((news) => (
            <div key={news.id} className="gallery-item" onClick={() => handleGalleryClick(news.url)}>
                <img
                    src={
                        news.thumbnail?.url
                            ? `${CMS_URL}${news.thumbnail.url}`
                            : '/default-thumbnail.jpg'
                    }
                    alt={news.title}
                />
                <div className="gallery-info">
                    <h3>{news.title}</h3>
                    <p className="date-box">{new Date(news.date).toLocaleDateString()}</p>
                </div>
            </div>
        ));
    };

    if (loading) {
        return <div>Loading news...</div>;
    }

    if (!currentNews) {
        return <div>News not found.</div>;
    }

    return (
        <section className="news-section">
            <div className="news-page-container">
                <h1 className="blue-white-gradient news-section-title">News</h1>
                <div className="main-news">
                    <img
                        src={
                            currentNews.main_image?.url
                                ? `${CMS_URL}${currentNews.main_image.url}`
                                : '/default-image.jpg'
                        }
                        alt={currentNews.title}
                        className="main-photo"
                    />
                    <h2 className="news-title">{currentNews.title}</h2>
                    <p className="date-box">{new Date(currentNews.date).toLocaleDateString()}</p>
                    <div className="news-description">
                        <TextFormatter content={currentNews.text}/>
                    </div>
                </div>
                <div className="news-gallery">
                    <button className="prev-button prev-button-news" onClick={handlePrevClick}>
                        &lt;
                    </button>
                    <div className="gallery-items">{renderGallery()}</div>
                    <button className="next-button next-button-news" onClick={handleNextClick}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsPage;
