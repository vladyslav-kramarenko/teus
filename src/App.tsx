import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { saveUTMParams } from "./util/saveUTMParams";
import './App.css';
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import axios from 'axios';
import CareerPage from "./pages/CareerPage/CareerPage";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import VacancyFormPage from "./pages/VacancyFormPage/VacancyFormPage";

const CMS_URL = process.env.REACT_APP_CMS_URL;

const App: React.FC = () => {
    const [latestNewsSlug, setLatestNewsSlug] = useState<string>(''); // State for latest news slug
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        saveUTMParams();

        // Fetch the latest news from Strapi
        const fetchLatestNews = async () => {
            try {
                const response = await axios.get(`${CMS_URL}/api/articles?populate=*&sort[0]=date:desc&pagination[limit]=1`);

                const latestNews = response.data.data[0]; // Ensure that the response is an array and we're fetching the first article.

                if (latestNews && latestNews.url) { // Correctly accessing the 'url' field directly from 'latestNews'
                    setLatestNewsSlug(latestNews.url); // Set the URL slug correctly.
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching latest news:', error);
                setLoading(false);
            }
        };

        fetchLatestNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {latestNewsSlug && (
                            <Route path="/news" element={<Navigate to={`/news/${latestNewsSlug}`} replace />} />
                        )}
                        <Route path="/news/:articleURL" element={<NewsPage />} />
                        <Route path="/careers" element={<CareerPage />} />
                        <Route path="/careers/:vacancyURL" element={<VacancyPage />} />
                        <Route path="/careers/:vacancyURL/apply" element={<VacancyFormPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
