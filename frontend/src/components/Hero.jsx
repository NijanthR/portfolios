import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="greeting"
                >
                    Hi, my name is
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="name"
                >
                    Nijanth R.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="role"
                >
                    I build AI-powered applications & full-stack solutions.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bio"
                >
                    Final year B.Tech student in Artificial Intelligence and Machine Learning with hands-on experience building AI-powered applications, RAG systems, and full-stack ML solutions. Skilled in Python, Django, and modern AI technologies including Deep Learning and LLM-based systems.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="cta-group"
                >
                    <a href="#projects" className="btn primary">View My Work <ArrowRight size={18} /></a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </motion.div>
            </div>
            <div className="hero-visual">
                {/* Abstract shape or 3D element could go here */}
                <div className="glow-orb"></div>
            </div>
        </section>
    );
};

export default Hero;
