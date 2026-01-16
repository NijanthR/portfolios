import React, { useState } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="numbered-heading center">What's Next?</h2>
            <h2 className="title">Get In Touch</h2>
            <p className="contact-text">
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a className="btn primary big-btn" href="mailto:your.email@example.com">
                Say Hello
            </a>

            <footer className="footer">
                <a href="https://github.com/pranesh-rvitm" target="_blank" rel="noopener noreferrer">
                    Designed & Built by Nijanth R
                </a>
            </footer>
        </section>
    );
};

export default Contact;
