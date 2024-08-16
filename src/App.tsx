// src/App.tsx
import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ReachUs from './components/ReachUs/ReachUs';
import Footer from './components/Footer/Footer';
import HistoryAndBackground from "./components/HistoryAndBackground/HistoryAndBackground";
import DesignComponent from "./components/Design/DesignComponent";
import CEO from "./components/CEO/CEO";
import GoldenStandards from "./components/GoldenStandarts/GoldenStandarts";
import Projects from "./components/Projects/Projects";
import Partners from "./components/Partners/Partners";
import {saveUTMParams} from "./util/saveUTMParams";
import './App.css';

const App: React.FC = () => {
    useEffect(() => {
        saveUTMParams();
    }, []);
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <About/>
                <HistoryAndBackground/>
                <DesignComponent/>
                <CEO/>
                <GoldenStandards/>
                <Projects/>
                <Partners/>
                <ReachUs/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
