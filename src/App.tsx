// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <HeroSection/>
                <About/>
                <Services/>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
