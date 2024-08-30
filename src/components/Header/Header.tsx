import React from 'react';
import './Header.css';
import {
    TeusLogo,
    TelegramIcon,
    WhatsAppIcon,
    YoutubeIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon
} from '../../util/icons';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href={"/"}>
                    <TeusLogo />
                </a>
            </div>
            <nav>
                <div className={"header-group header-nav"}>
                    <p><a href="/news">NEWS</a></p>
                </div>

                <div className="header-mail header-group">
                    <p><a href="mailto:INFO@teus-group.com">info@teus-group.com</a></p>
                </div>
                <div className="header-contact header-group">
                    <p><a href="tel:+902129223601">+90 212 922-36-01 (TR)</a></p>
                    <p><a href="tel:+380500206524">+380 50 020 65 24 (UA)</a></p>
                </div>
                <div className="header-chat header-group">

                    <a href="https://t.me/Teus_group_bot" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon/>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B902129223601&amp;text&amp;type=phone_number&amp;app_absent=0"
                        target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon/>
                    </a>
                </div>

                <div className="header-group header-social">

                    <a href="https://www.youtube.com/watch?v=8T5EId75lC8&t=12s" target="_blank"
                       rel="noopener noreferrer">
                        <YoutubeIcon/>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61550667556986" target="_blank"
                       rel="noopener noreferrer">
                        <FacebookIcon/>
                    </a>
                    <a href="https://www.instagram.com/desire_antalya/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon/>
                    </a>
                    <a href="https://www.linkedin.com/company/teus-group" target="_blank"
                       rel="noopener noreferrer">
                        <LinkedinIcon/>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;