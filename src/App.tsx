// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Services/>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
