import React from 'react';
import './Projects.css';
import titleImage from '../../assets/images/our_projects.png'; // Replace with your title image path
import projectImage1 from '../../assets/images/desire_residences.jpg'; // Replace with your project image path
import projectImage2 from '../../assets/images/desire_hotel.jpg'; // Replace with your project image path

const Projects: React.FC = () => {
    return (
        <div className="our-projects-container">
            <img src={titleImage} alt="Our Projects" className="our-projects-title" />
            <div className="projects-wrapper">
                <div className="project">
                    <img src={projectImage1} alt="Desire Residences" />
                    <div className="project-overlay">
                        <div className="project-title">Desire<br/>Residences</div>
                        <div className="project-description">
                            88 private residences<br />
                            5☆ concierge services
                        </div>
                        <a href="https://desire-antalya.com" className="project-button">Learn More</a>
                    </div>
                </div>
                <div className="project">
                    <img src={projectImage2} alt="Desire Boutique Hotel" />
                    <div className="project-overlay">
                        <div className="project-title">Desire<br/>Boutique Hotel</div>
                        <div className="project-description">
                            39 hotel apartments<br />
                            Best Western Hotel
                        </div>
                        <a href="https://desire-antalya.com" className="project-button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
