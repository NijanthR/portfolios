import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';
import profileImg from '../assets/profile.png';
import brainscanImg from '../assets/projects/brainscan.png';
import datainsightImg from '../assets/projects/datainsight.png';
import teachingAssistantImg from '../assets/projects/teaching_assistant.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "BrainScanAI",
            description: "Deep Learning-Based Brain Tumor Detection using MRI Images. Built a complete pipeline featuring a CNN for classification, image preprocessing, a modern prediction dashboard, and integrated an LLM (GPT-4.1 Nano) for medical recommendations.",
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "GPT-4.1 Nano"],
            github: "https://github.com/yourusername/Kaneki",
            demo: "#",
            image: brainscanImg
        },
        {
            id: 2,
            title: "AI Teaching Assistant",
            description: "AI-powered teaching assistant using GPT-4.1 Nano with RAG for context-aware Q&A. Integrated Whisper for voice interaction, automated MCQ generation for self-assessment, and a coding evaluation module.",
            technologies: ["Python", "GPT-4.1 Nano", "RAG", "Whisper", "Vector Database"],
            github: "https://github.com/yourusername/Teaching_Assistant",
            demo: "#",
            image: teachingAssistantImg
        },
        {
            id: 3,
            title: "DataInsight AI",
            description: "Multi-Agent AI System for automated dataset quality analysis and bias detection. Built with CrewAI to run specialized agents in parallel, providing interactive dataset health scores and AI-driven improvement recommendations.",
            technologies: ["Python", "CrewAI", "Llama-3.1", "React"],
            github: "https://github.com/yourusername/Chopper",
            demo: "#",
            image: datainsightImg
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="numbered-heading">03. Some Things I've Built</h2>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={project.id} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="project-content">
                            <div className="project-label">Featured Project</div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-description-box">
                                <p>{project.description}</p>
                            </div>
                            <ul className="project-tech-list">
                                {project.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                <a href={project.github || "#"} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                    <Github size={22} />
                                </a>
                                <a href={project.demo || "#"} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={22} />
                                </a>
                            </div>
                        </div>
                        <div className="project-image">
                            <a href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
