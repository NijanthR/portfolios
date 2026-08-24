import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import './SocialSidebars.css';

const SocialSidebars = () => {
    return (
        <>
            <div orientation="left" className="side-element left">
                <ul className="social-list">
                    <li>
                        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                    </li>
                </ul>
            </div>

            <div orientation="right" className="side-element right">
                <div className="email-wrapper">
                    <a href="mailto:srinijan2405@gmail.com" className="email-link">
                        srinijan2405@gmail.com
                    </a>
                </div>
            </div>
        </>
    );
};

export default SocialSidebars;
