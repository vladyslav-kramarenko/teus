// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import HistoryAndBackground from "./components/HistoryAndBackground/HistoryAndBackground";
import DesignComponent from "./components/Design/DesignComponent";
import CEO from "./components/CEO/CEO";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <About/>
                <HistoryAndBackground/>
                <DesignComponent/>
                <CEO/>
                <Services/>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
