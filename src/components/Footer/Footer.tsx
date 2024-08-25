import React from 'react';
import './Footer.css';
// import logo from '../../assets/images/te'; // Replace with your logo path
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Example social icons

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="footer-logo">
                        {/* Replace with SVG Logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 42.00129699707031" fill="none"
                             preserveAspectRatio="xMidYMid meet" role="img">
                            <path
                                d="M48.9993 0H14.0003H7.14084H0V14.0003H14.0003V7.00017H28.0007H35.0008V14.0003L48.9993 0Z"
                                fill="#3161C4"></path>
                            <path d="M14.0002 42.0013L28.0006 28.001V7.00049L14.0002 21.0008V42.0013Z"
                                  fill="#3161C4"></path>
                            <path
                                d="M84.3462 28.0433H69.761C67.6657 28.0433 65.9758 26.3386 65.9758 24.2267V17.8151C65.9758 15.7032 67.6657 13.9985 69.761 13.9985H80.5611C82.6563 13.9985 84.3462 15.7032 84.3462 17.8151V22.2425H68.3968V25.6001H84.3462V28.0414V28.0433ZM81.9233 19.8012V16.4436H68.3968V19.8012H81.9233Z"
                                fill="#3161C4"></path>
                            <path
                                d="M105.125 28.0434H90.5395C88.4443 28.0434 86.7544 26.3387 86.7544 24.2268V14.0005H89.1772V25.6002H102.704V14.0005H105.127V28.0434H105.125Z"
                                fill="#3161C4"></path>
                            <path
                                d="M125.992 24.2268C125.992 26.3387 124.302 28.0434 122.207 28.0434H107.62V25.602H123.569V22.2445H110.75C108.654 22.2445 106.965 20.5398 106.965 18.4279V17.8171C106.965 15.7052 108.654 14.0005 110.75 14.0005H125.999V16.4418H109.386V19.7994H122.205C124.3 19.7994 125.99 21.5041 125.99 23.616V24.2268H125.992Z"
                                fill="#3161C4"></path>
                            <path
                                d="M137.967 16.49V19.0776H137.319V18.2299C136.945 18.7611 136.327 19.1498 135.507 19.1498C134.069 19.1498 132.97 18.0207 132.97 16.5622C132.97 15.1037 134.091 13.9746 135.55 13.9746C136.557 13.9746 137.434 14.5651 137.786 15.485H136.966C136.679 14.9889 136.183 14.665 135.55 14.665C134.515 14.665 133.723 15.4924 133.723 16.5622C133.723 17.632 134.499 18.4594 135.513 18.4594C136.448 18.4594 137.044 17.8486 137.223 17.1434H135.433V16.49H137.963H137.967Z"
                                fill="#3161C4"></path>
                            <path
                                d="M141.203 15.4334V16.1016C141.073 16.0739 140.944 16.0739 140.794 16.0739C140.14 16.0739 139.729 16.5625 139.729 17.1307V19.0798H139.046V15.4853H139.694V16.0387C139.953 15.6648 140.392 15.4131 140.881 15.4131C140.988 15.4131 141.103 15.4205 141.205 15.4353L141.203 15.4334Z"
                                fill="#3161C4"></path>
                            <path
                                d="M141.382 17.2806C141.382 16.2237 142.217 15.4111 143.294 15.4111C144.371 15.4111 145.191 16.2237 145.191 17.2806C145.191 18.3374 144.364 19.15 143.294 19.15C142.224 19.15 141.382 18.3374 141.382 17.2806ZM144.488 17.2806C144.488 16.5828 143.97 16.0441 143.294 16.0441C142.618 16.0441 142.085 16.5828 142.085 17.2806C142.085 17.9784 142.611 18.517 143.294 18.517C143.977 18.517 144.488 17.9784 144.488 17.2806Z"
                                fill="#3161C4"></path>
                            <path
                                d="M149.254 15.4834V19.0779H148.606V18.5022C148.347 18.8909 147.908 19.1501 147.42 19.1501C146.565 19.1501 145.874 18.6114 145.874 17.475V15.4834H146.557V17.4602C146.557 18.1136 146.996 18.4948 147.542 18.4948C148.175 18.4948 148.569 17.9914 148.569 17.4028V15.4834H149.252H149.254Z"
                                fill="#3161C4"></path>
                            <path
                                d="M153.998 17.2807C153.998 18.3727 153.258 19.1501 152.301 19.1501C151.82 19.1501 151.381 18.9206 151.087 18.5393V20.3014H150.404V15.4853H151.051V16.0683C151.353 15.6648 151.799 15.4131 152.303 15.4131C153.26 15.4131 154 16.1905 154 17.2825L153.998 17.2807ZM153.293 17.2807C153.293 16.5625 152.826 16.0442 152.186 16.0442C151.546 16.0442 151.064 16.5625 151.064 17.2807C151.064 17.9988 151.538 18.5171 152.186 18.5171C152.834 18.5171 153.293 17.9988 153.293 17.2807Z"
                                fill="#3161C4"></path>
                            <path
                                d="M48.9993 16.4437H54.9888H56.8064V23.2643V28.0434H59.2274V20.8248V16.4437H63.5734L65.9962 14.0005H48.9993V16.4437Z"
                                fill="#3161C4"></path>
                        </svg>
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Our Office</h3>
                    <p>Ermenek Kent Plaza Kardeş Kentler Caddesi No:40 D:E </p>
                    <p>Muratpaşa/Antalya Türkiye, 07230</p>
                    <p><a href="tel:+902129223601">+90 212 922-36-01 (TR)</a></p>
                    <p><a href="tel:+380500206524">+380 50 020 65 24 (UA)</a></p>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Navigation</h3>
                    <ul className="footer-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/news">News</a></li>
                        {/* Add more links here as needed */}
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="footer-social-links">
                        <div className="footer-social-links-part">
                            {/*<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>*/}
                            {/*<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>*/}
                            {/*<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>*/}
                            {/*<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>*/}
                            <a href="https://www.youtube.com/watch?v=8T5EId75lC8&t=12s" target="_blank"
                               rel="noopener noreferrer">YOUTUBE</a>
                            <a href="https://www.instagram.com/desire_antalya/" target="_blank"
                               rel="noopener noreferrer">INSTAGRAM</a>
                            <a href="https://www.linkedin.com/company/teus-group" target="_blank"
                               rel="noopener noreferrer">LINKEDIN</a>
                        </div>
                        <div className="footer-social-links-part">
                            {/*<a href="https://www.facebook.com/profile.php?id=61550667556986" target="_blank"*/}
                            {/*rel="noopener noreferrer">FaceBook</a>*/}
                            {/*<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>*/}
                            {/*<br/>*/}
                            <a className="link-style-e5b6823c-1054-4386-8c19-3fa278ca314f external-link"
                               rel="noopener noreferrer" target="_blank" href="https://t.me/Teus_group_bot">TELEGRAM</a>
                            <a className="link-style-e5b6823c-1054-4386-8c19-3fa278ca314f external-link"
                               rel="noopener noreferrer" target="_blank"
                               href="https://api.whatsapp.com/send/?phone=%2B902129223601&amp;text&amp;type=phone_number&amp;app_absent=0">WHATSAPP</a>
                            <a className="link-style-e5b6823c-1054-4386-8c19-3fa278ca314f external-link"
                               href="mailto:info@teus-group.com">E-MAIL</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024, All Rights Reserved</p>
                <p>Made by Vladyslav Kramarenko</p>
            </div>
        </footer>
    );
};

export default Footer;
