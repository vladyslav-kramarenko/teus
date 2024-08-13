import React from 'react';
import './DesignComponent.css';

import archDesignImg from '../../assets/images/design1.png';
import civilEngineeringImg from '../../assets/images/design2.png';
import projectManagementImg from '../../assets/images/design3.png';

const DesignComponent: React.FC = () => {
    return (
        <div className="design-container">
            <div className="design-title">
                Designing<br />Spaces
            </div>

            <div className="design-description">
                Designing and constructing new buildings is a complex and collaborative process in which our best professionals work together to create a structure that is not only aesthetically pleasing, but also safe, functional and efficient.
            </div>

            <div className="design-blocks">
                <div className="design-block">
                    {/*<div className="design-number-circle">01</div>*/}
                    <img src={archDesignImg} alt="Architectural Design" />
                    <div className="design-block-title">Architectural<br/>Design</div>
                    <div className="design-block-text">
                        Architects begin by understanding the client's needs, project goals, and site conditions. They create conceptual designs that take into account aesthetics, spatial requirements, and functionality.
                    </div>
                </div>
                <div className="design-block">
                    {/*<div className="design-number-circle">02</div>*/}
                    <img src={civilEngineeringImg} alt="Civil Engineering" />
                    <div className="design-block-title">Civil<br/>Engineering</div>
                    <div className="design-block-text">
                        Engineers deal with the framework of the building and ensure that it can withstand loads and environmental influences. They decide on the type of materials to be used, considering factors such as strength, durability, and cost.
                    </div>
                </div>
                <div className="design-block">
                    {/*<div className="design-number-circle">03</div>*/}
                    <img src={projectManagementImg} alt="Documentation & Project Management" />
                    <div className="design-block-title">Documentation &<br/>Project Management</div>
                    <div className="design-block-text">
                        Comprehensive construction documentation is prepared, including drawings, specifications, and schedules. Construction supervision includes monitoring the process to ensure compliance with the design documents.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignComponent;
