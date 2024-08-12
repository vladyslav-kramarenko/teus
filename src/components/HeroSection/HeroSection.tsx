// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Teus Group</h1>
                <p>Your partner in premium property development</p>
                <a href="#about" className="cta-button">Learn More</a>
            </div>
        </section>
    );
}

export default HeroSection;
