import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';
import profileImg from '../assets/profile.png';

// TODO: Upload your images to frontend/src/assets/projects/ folder
// Then uncomment the imports below and use them in the image property
// import aiDetectorImg from '../assets/projects/ai-video-detector.png';
// import ecommerceImg from '../assets/projects/ecommerce-platform.png';
// import taskManagerImg from '../assets/projects/task-manager.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Generated Video Detector",
            description: "AI Generated Video Detector allows you to detect a AI generated videos and prevets you from scammers and safe gaurds you also allows you to report wrong predictions and improves based on that.",
            technologies: ["Python", "MTCNN", "EffecientNet V2", "Gradio"],
            github: "https://github.com/yourusername/ai-video-detector",
            demo: "https://ai-video-detector.vercel.app",
            image: profileImg
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "A full-featured online store with curated product flows and analytics. Built with modern web technologies to provide seamless shopping experience.",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://ecommerce-platform.vercel.app",
            image: "https://via.placeholder.com/800x500/161b22/58a6ff?text=E-Commerce+Platform"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Real-time collaboration tool for teams to organize projects, assign tasks, and track progress with intuitive interface and live updates.",
            technologies: ["Vue.js", "Firebase", "Tailwind", "WebSocket"],
            github: "https://github.com/yourusername/task-manager",
            demo: "https://task-manager-app.netlify.app",
            image: ""
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
