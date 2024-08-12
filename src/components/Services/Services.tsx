
// src/components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-item">
                <h3>Civil Engineering</h3>
                <p>We ensure your building framework can withstand loads and environmental influences.</p>
            </div>
            <div className="service-item">
                <h3>Architectural Design</h3>
                <p>Creating aesthetic and functional designs tailored to your needs.</p>
            </div>
            {/* Add more service items as needed */}
        </section>
    );
}

export default Services;
