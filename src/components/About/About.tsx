import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/slider1_4.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about-bg-container">
            <div className="about-container">
                <div className="about-header">
                    <h2>About Us</h2>
                    <a href="#contact" className="action-button  desktop-button">Reach Us</a>
                </div>
                <div className="about-content">
                    <p>
                        TEUS GROUP IS AN <span className={"highlight"}>INVESTMENT AND CONSTRUCTION COMPANY</span> THAT
                        CREATES BREAKTHROUGH PROJECTS OF THE FUTURE.
                        THE GLOBAL VISION IS TO PROVIDE CLIENTS <span className={"highlight"}>INNOVATIVE ARCHITECTURAL SOLUTIONS</span> WITH
                        THOUGHTFUL DESIGN AND INTERIOR CONCEPTS AT COMPETITIVE PRICES.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="About Us"/>
                </div>
            </div>
        </section>
    );
}

export default About;
