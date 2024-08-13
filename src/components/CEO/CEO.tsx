import React from 'react';
import './CEO.css';
import ceoBackgroundImage from '../../assets/images/basel.jpg';

const CeoBlock: React.FC = () => {
    return (
        <div
            className="ceo-container"
            style={{backgroundImage: `url(${ceoBackgroundImage})`}}
        >
            <div className="ceo-text">
                Our commitment to <span className={"highlight"}>visionary premium property development</span> is not just about creating simple
                real estate, but also about creating legacies that stand the test of time. At Teus Group, every project
                is a testament to our commitment to redefining luxury, pushing boundaries, and leaving an indelible mark
                on the global landscape of sophistication and exclusivity.
            </div>
            <div className="ceo-name">Basel Houari</div>
            <div className="ceo-title">CEO Teus Group</div>
        </div>
    );
};

export default CeoBlock;
