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

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const App: React.FC = () => {
    const [latestNewsSlug, setLatestNewsSlug] = useState<string>(''); // State for latest news slug
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        saveUTMParams();

        // Fetch the latest news from Strapi
        const fetchLatestNews = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/articles?populate=*&sort[0]=date:desc&pagination[limit]=1`);

                const latestNews = response.data.data[0]; // Ensure that the response is an array and we're fetching the first article.

                // console.log(response.data.data); // Log the entire response to ensure the structure is correct.
                // console.log(latestNews); // Log the first article to verify it's correctly fetched.

                if (latestNews && latestNews.url) { // Correctly accessing the 'url' field directly from 'latestNews'
                    // console.log("Latest news URL:", latestNews.url);
                    setLatestNewsSlug(latestNews.url); // Set the URL slug correctly.
                } else {
                    // console.error("Latest news does not have a valid URL.");
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
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
