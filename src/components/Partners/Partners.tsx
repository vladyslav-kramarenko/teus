import React from 'react';
import './Partners.css';
import titleImage from '../../assets/images/our_partners.webp';
import partnerLogo1 from '../../assets/images/Best_Western_logo_horizontal.png';
import partnerLogo2 from '../../assets/images/aimm.png';
import partnerLogo3 from '../../assets/images/Zitlo_bud_since.png';

const Partners: React.FC = () => {
    return (
        <div className="our-partners-container">
            {/* Background Sections */}
            <div className="background-section"></div>
            <div className="background-section black"></div>

            {/* Content */}
            <img src={titleImage} alt="Our Partners" className="our-partners-title" />
            <div className="our-partners-description">
                Highly skilled teams together with long-term proven suppliers enable them to create projects of the latest standards: architectural excellence, energy-efficient design, sustainable construction materials, smart home features, green spaces, amenities, high-quality finishes and many others.
            </div>

            {/* Logos */}
            <div className="partners-logos-wrapper">
                <img src={partnerLogo1} alt="Partner 1" className="partner-logo" />
                <img src={partnerLogo2} alt="Partner 2" className="partner-logo" />
                <img src={partnerLogo3} alt="Partner 3" className="partner-logo" />
            </div>
        </div>
    );
};

export default Partners;
