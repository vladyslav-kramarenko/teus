// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ReachUs from '../components/ReachUs/ReachUs';
import HistoryAndBackground from '../components/HistoryAndBackground/HistoryAndBackground';
import DesignComponent from '../components/Design/DesignComponent';
import CEO from '../components/CEO/CEO';
import GoldenStandards from '../components/GoldenStandarts/GoldenStandarts';
import Projects from '../components/Projects/Projects';
import Partners from '../components/Partners/Partners';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <HistoryAndBackground />
            <DesignComponent />
            <CEO />
            <GoldenStandards />
            <Projects />
            <Partners />
            <ReachUs />
        </>
    );
}

export default HomePage;
