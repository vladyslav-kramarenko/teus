import React, {useEffect, useState} from 'react';
import './HistoryAndBackground.css';
import jb2logo from '../../assets/images/logo/2 Zhytlo bud_white.svg';
import galleryImage1 from '../../assets/images/gallery1.webp';
import galleryImage2 from '../../assets/images/gallery2.webp';
import galleryImage3 from '../../assets/images/gallery3.webp';
import galleryImage4 from '../../assets/images/gallery4.webp';
import backgroundImage from '../../assets/images/historyAndBackground.png';

const images = [galleryImage1, galleryImage2, galleryImage3, galleryImage4];

const HistoryAndBackground: React.FC = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setNextImageIndex((currentImageIndex + 1) % images.length);

        setTimeout(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
            setAnimating(false);
        }, 1000);
    };

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        setNextImageIndex((currentImageIndex - 1 + images.length) % images.length);

        setTimeout(() => {
            setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
            setAnimating(false);
        }, 1000);
    };

    return (
        <div className="history-background-container">
            <div className="history-left-column">
                <div className="history-gallery">
                    <button className="prev-button" onClick={handlePrev}>&lt;</button>
                    <img src={images[currentImageIndex]} alt={`Gallery Image ${currentImageIndex + 1}`}/>
                    <button className="next-button" onClick={handleNext}>&gt;</button>
                </div>
                <div className="history-content">
                    <span className={"history-content-title"}>
                        <h2>History & Background</h2>
                        <img className="background-history-logo-pc" src={jb2logo} alt="Zhytlobud-2 Logo"/>
                    </span>

                    <p>Teus Group is a company that draws on the rich heritage of Zhytlobud-2, a company with an
                        illustrious 80-year history.</p>
                    <p>
                        <span className="years-label">
                            <span className="background-block-number">80+</span>
                            <span className="history-text">years of<br/>history,</span>
                        </span>
                        <span className="projects-label">
                            <span className="background-block-number">100+</span>
                            <span className="history-text">unique completed<br/>projects</span>
                        </span>
                        <img className="background-history-logo-mobile" src={jb2logo} alt="Zhytlobud-2 Logo"/>
                    </p>
                </div>
            </div>

            <div className="history-right-column" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="history-block history-block-1">
                    <div className="history-block-number">01</div>
                    <div className="history-block-content">
                        <h3>Founded On The Pillars</h3>
                        <p>Founded on the pillars of experience and expertise, Teus Group is strategically positioned to
                            master the intricacies of the international premium property market.</p>
                    </div>
                </div>
                <div className="history-block history-block-2">
                    <div className="history-block-number">02</div>
                    <div className="history-block-content">
                        <h3>The Legacy And Insights</h3>
                        <p>Teus Group leverages the legacy and insights of Zhytlobud-2 to set new benchmarks, deliver
                            excellence, and drive innovation in the dynamic field of global high-end property.</p>
                    </div>
                </div>
                <div className="history-block history-block-3">
                    <div className="history-block-number">03</div>
                    <div className="history-block-content">
                        <h3>Unrivalled Quality</h3>
                        <p>It represents a heritage of unrivalled quality and a forward-thinking approach to meeting the
                            needs of a discerning international clientele.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryAndBackground;
