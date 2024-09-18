import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {saveUTMParams} from "./util/saveUTMParams";
import './App.css';
import HomePage from "./pages/HomePage";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import newsData from "./data/newsData";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
    useEffect(() => {
        saveUTMParams();
    }, []);

    const latestNewsId = newsData[newsData.length - 1].id;


    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/news" element={<Navigate to={`/news/${latestNewsId}`} replace />} />
                        <Route path="/news/:newsId" element={<NewsPage/>}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
