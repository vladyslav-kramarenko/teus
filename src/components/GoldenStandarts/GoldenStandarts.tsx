import React, { useEffect, useRef } from 'react';
import './GoldenStandards.css';
import goldenStandardsTitle from '../../assets/images/golden_standards.png'; // Replace with your image path

const GoldenStandards: React.FC = () => {
    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (blockRef.current) {
                const blocks = blockRef.current.querySelectorAll('.golden-blocks');
                blocks.forEach(block => {
                    const blockTop = block.getBoundingClientRect().top;
                    if (blockTop < window.innerHeight - 100) {
                        block.classList.add('visible');
                    } else {
                        block.classList.remove('visible');
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="golden-standards-outer-container">
        <div className="golden-standards-container">
            <div className="golden-column golden-column-left">
                <img src={goldenStandardsTitle} alt="Golden Standards" className="golden-title"/>
            </div>
            <div className="golden-column golden-column-right">
                <div className="golden-description">
                    <span className={"highlight"}>Teus Group encompasses a multitude of features and amenities that cater to comfort, convenience,
                    sustainability, and overall quality of life for its residents.</span> With a relentless drive for pushing
                    boundaries, it creates breakthrough developments that not only meet the demands of today but also
                    anticipate the needs of tomorrow.
                </div>
            </div>
        </div>

            <div className="golden-blocks-container" ref={blockRef}>
                <div className="golden-blocks">
                    <div className="golden-block">
                        <div className="golden-number">01</div>
                        <div className="golden-text">Turnkey<br/>Solutions</div>
                    </div>
                    <div className="golden-block">
                        <div className="golden-number">02</div>
                        <div className="golden-text">Easy Payment<br/>Plans</div>
                    </div>
                    <div className="golden-block">
                        <div className="golden-number">03</div>
                        <div className="golden-text">Premium<br/>Materials</div>
                    </div>
                </div>
                <div className="golden-blocks">
                    <div className="golden-block">
                        <div className="golden-number">04</div>
                        <div className="golden-text">Interiors By<br/>Best Bureaus</div>
                    </div>
                    <div className="golden-block">
                        <div className="golden-number">05</div>
                        <div className="golden-text">Luxury Lifestyle<br/>Communities</div>
                    </div>
                    <div className="golden-block">
                        <div className="golden-number">06</div>
                        <div className="golden-text">Partnership With<br/>Word-Renowned<br/>Hotels</div>
                    </div>
                </div>
                <div className="golden-blocks">
                    <div className="golden-block">
                        <div className="golden-number">07</div>
                        <div className="golden-text">Leading<br/>Experts</div>
                    </div>
                    <div className="golden-block">
                        <div className="golden-number">08</div>
                        <div className="golden-text">Profitable<br/>Markets</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldenStandards;
