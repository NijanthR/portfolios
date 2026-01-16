import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // For development, we assume backend is at 8000
                const response = await axios.get('http://127.0.0.1:8000/api/projects/');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                // Fallback data for demo purposes if backend isn't running or empty
                setProjects([
                    {
                        id: 1,
                        title: "E-Commerce Platform",
                        description: "A full-featured online store built with Django and React.",
                        technologies: "React, Django, PostgreSQL",
                        link: "#",
                        image: "https://via.placeholder.com/600x400/161b22/58a6ff?text=Project+1"
                    },
                    {
                        id: 2,
                        title: "Task Management App",
                        description: "Real-time collaboration tool for teams.",
                        technologies: "Vue.js, Firebase, Tailwind",
                        link: "#",
                        image: "https://via.placeholder.com/600x400/161b22/238636?text=Project+2"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="projects-section">
            <h2 className="numbered-heading">Some Things I've Built</h2>

            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-inner">
                                <header>
                                    <div className="project-top">
                                        <div className="folder">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                        </div>
                                        <div className="project-links">
                                            <a href={project.image || "#"} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.link || "#"} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="project-title">
                                        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    </h3>
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>
                                </header>
                                <footer>
                                    <ul className="project-tech-list">
                                        {project.technologies.split(',').map((tech, i) => (
                                            <li key={i}>{tech.trim()}</li>
                                        ))}
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
