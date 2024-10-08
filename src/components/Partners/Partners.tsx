import React from 'react';
import './Partners.css';
import titleImage from '../../assets/images/our_partners.webp';
import partnerLogo1 from '../../assets/images/logo/Best_Western_logo_horizontal.png';
import partnerLogo2 from '../../assets/images/logo/aimm.png';
import partnerLogo3 from '../../assets/images/logo/Zitlo_bud_since.png';

const Partners: React.FC = () => {
    return (
        <div className="our-partners-container">

            <div className="background-section-top"></div>
            <div className="background-section-bottom black"></div>

            {/* Content */}
            <img src={titleImage} alt="Our Partners" className="our-partners-title"/>
            {/*TODO find font to replace the image*/}
            {/*<h2 className="our-partners-title">Our Partners</h2>*/}

            <div className="our-partners-description">
                Highly skilled teams together with long-term proven suppliers enable them to create projects of the
                latest standards: architectural excellence, energy-efficient design, sustainable construction materials,
                smart home features, green spaces, amenities, high-quality finishes and many others.
            </div>

            <div className="partners-logos-wrapper">
                <a href={"https://www.bestwestern.com" } target="_blank" rel="noopener noreferrer">
                    <img src={partnerLogo1} alt="Partner 1"
                         className="partner-logo"/></a>
                <a href={"https://aimm-group.com/"} target="_blank" rel="noopener noreferrer">
                    <img src={partnerLogo2} alt="Partner 2"
                         className="partner-logo"/></a>
                <a href={"https://www.zhilstroj-2.ua/"} target="_blank" rel="noopener">
                    <img src={partnerLogo3} alt="Partner 3"
                         className="partner-logo"/></a>
            </div>
        </div>
    );
};

export default Partners;
