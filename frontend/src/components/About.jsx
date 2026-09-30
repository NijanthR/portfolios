import React from 'react';
import { motion } from 'framer-motion';
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
                                Hello! I'm <strong>Nijanth R</strong>, a final year B.Tech student specialising in
                                Artificial Intelligence and Machine Learning at Bannari Amman Institute of Technology,
                                Tamil Nadu. I love building intelligent systems that solve real problems.
                            </p>
                            <p>
                                My work spans AI-powered applications, multi-agent RAG pipelines, deep learning models,
                                and full-stack web solutions. I'm passionate about bridging the gap between cutting-edge
                                AI research and practical, user-friendly products.
                            </p>
                            <p>Here are a few technologies I've been working with recently:</p>

                            <ul className="skills-list">
                                <li>Python</li>
                                <li>Django</li>
                                <li>LangChain / LangGraph</li>
                                <li>CrewAI</li>
                                <li>TensorFlow / Keras</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-image-column">
                        <div className="image-wrapper">
                            <img
                                src={profileImage}
                                alt="Nijanth R — AI & ML Engineer"
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
