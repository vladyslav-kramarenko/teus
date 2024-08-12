// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>© 2024 Teus Group. All Rights Reserved.</p>
            <ul className="social-links">
                <li><a href="https://www.linkedin.com/company/teus-group">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/desire_antalya/">Instagram</a></li>
                {/* Add more social links as needed */}
            </ul>
        </footer>
    );
}

export default Footer;
