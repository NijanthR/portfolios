import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/profile.png';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="about-grid"
                >
                    <div className="about-text-column">
                        <h2 className="numbered-heading">About Me</h2>
                        <div className="about-text">
                            <p>
                                Hello! My name is Nijanth and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of building software for various clients. My main focus these days is building accessible, inclusive products and digital experiences.
                            </p>
                            <p>Here are a few technologies I've been working with recently:</p>

                            <ul className="skills-list">
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>Django</li>
                                <li>Python</li>
                                <li>Machine Learning</li>
                                <li>TensorFlow</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-image-column">
                        <div className="image-wrapper">
                            <img
                                src={profileImage}
                                alt="Profile portrait"
                                className="profile-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
