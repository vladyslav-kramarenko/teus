import React from 'react';
import './Hero.css';
import videoSrc from '../../assets/videos/the_real_future_is_here.mp4';
import image1 from '../../assets/images/image-6e7a2079-1429-4a3b-bf6e-0a996eff15ca.png';
import image2 from '../../assets/images/image-dc504f9e-a03f-4955-9a6b-ee1a07c04a0b.png';
import image3 from '../../assets/images/image-374a6848-88dc-4052-b634-5250d9f2269f.png';


const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-video">
                <video id="hero-video" playsInline autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="hero-button-container">
                    {/*<a href="#learn-more" className="hero-button">LEARN MORE</a>*/}
                    <a href="#learn-more" className="action-button">LEARN MORE</a>
                </div>
            </div>

            <div className="hero-images">
                <img src={image1} alt="Image 1" className="image-1"/>
                <img src={image2} alt="Image 2" className="image-2"/>
                <img src={image3} alt="Image 3" className="image-3"/>
            </div>
        </div>
    );
};

export default Hero;
