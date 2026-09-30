import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, RotateCw, X, Lock, Maximize2, Sparkles, Layers, Cpu, Globe } from 'lucide-react';
import brainscanDashboardImg from '../assets/projects/brainscan.png';
import teachingAssistantImg from '../assets/projects/teaching_assistant.png';
import './Projects.css';

// Modal for Full-Screen Live App Inspection
const LiveAppModal = ({ project, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleReload = (e) => {
        e.stopPropagation();
        setIsLoading(true);
        setReloadKey(prev => prev + 1);
    };

    const displayUrl = project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '');

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-dots">
                        <span className="dot dot-close" onClick={onClose} title="Close Window (Esc)"></span>
                        <span className="dot dot-min"></span>
                        <span className="dot dot-max"></span>
                    </div>

                    <div className="modal-url-bar">
                        <Lock size={13} className="url-lock-icon" />
                        <span className="modal-url-text">{displayUrl}</span>
                        <div className="live-badge">
                            <span className="live-pulse-dot"></span>
                            <span>LIVE DASHBOARD</span>
                        </div>
                    </div>

                    <div className="modal-actions">
                        {!project.isIframeBlocked && (
                            <button
                                type="button"
                                onClick={handleReload}
                                className="modal-action-btn"
                                title="Reload Dashboard"
                                aria-label="Reload Dashboard"
                            >
                                <RotateCw size={15} />
                            </button>
                        )}
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-action-btn"
                            title="Open in Full Browser Tab"
                            aria-label="Open in Full Browser Tab"
                        >
                            <ExternalLink size={15} />
                        </a>
                        <button
                            type="button"
                            onClick={onClose}
                            className="modal-close-btn"
                            title="Close Window (Esc)"
                            aria-label="Close Window"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                <div className="modal-body">
                    {project.isIframeBlocked ? (
                        <div className="modal-image-view">
                            <img
                                src={project.previewImage || brainscanDashboardImg}
                                alt={`${project.title} Dashboard`}
                                className="modal-preview-img"
                            />
                            <div className="modal-image-overlay">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-direct-launch-btn"
                                >
                                    <span>Launch {project.title} in New Tab</span>
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <>
                            {isLoading && (
                                <div className="modal-loading-screen">
                                    <div className="modal-spinner"></div>
                                    <p className="modal-loading-title">Connecting to {project.title} Live Dashboard...</p>
                                    <span className="modal-loading-sub">{project.demo}</span>
                                </div>
                            )}
                            <iframe
                                key={reloadKey}
                                src={project.demo}
                                title={project.title}
                                className={`modal-iframe ${isLoading ? 'hidden' : 'visible'}`}
                                onLoad={() => setIsLoading(false)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// Mini Browser Card Preview Frame
const ProjectCardPreview = ({ project, onMaximize }) => {
    const displayUrl = project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '');

    return (
        <div className="proj-card-media-window">
            {/* Window Chrome Header */}
            <div className="proj-card-chrome">
                <div className="proj-card-dots">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-min"></span>
                    <span className="dot dot-max"></span>
                </div>

                <div className="proj-card-url-bar">
                    <Lock size={10} className="url-lock-icon" />
                    <span className="proj-card-url-text">{displayUrl}</span>
                </div>

                <div className="proj-card-live-tag">
                    <span className="live-pulse-dot"></span>
                    <span>LIVE</span>
                </div>
            </div>

            {/* Preview Viewport */}
            <div className="proj-card-viewport" onClick={() => onMaximize(project)}>
                {project.previewImage ? (
                    <img
                        src={project.previewImage}
                        alt={`${project.title} Preview`}
                        className="proj-card-preview-img"
                        loading="lazy"
                    />
                ) : (
                    <div className="proj-card-iframe-wrap">
                        <iframe
                            src={project.demo}
                            title={`${project.title} Card Preview`}
                            className="proj-card-mini-iframe"
                            tabIndex="-1"
                            loading="lazy"
                        />
                        <div className="proj-card-iframe-cover"></div>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="proj-card-hover-overlay">
                    <button
                        type="button"
                        className="proj-card-overlay-action primary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onMaximize(project);
                        }}
                    >
                        <Maximize2 size={14} />
                        <span>Interactive Preview</span>
                    </button>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-card-overlay-action secondary"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={14} />
                        <span>Live Site</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeModalProject, setActiveModalProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const filterCategories = [
        { id: 'All', label: 'All Projects' },
        { id: 'AI & ML', label: 'AI & Deep Learning' },
        { id: 'Agents & LLMs', label: 'Agentic AI & LLMs' },
        { id: 'Full Stack', label: 'Full Stack Web' }
    ];

    const projects = [
        {
            id: 1,
            title: "BrainScanAI",
            filterCategory: "AI & ML",
            category: "Deep Learning & Medical AI",
            description: "Deep Learning-Based Brain Tumor Detection using MRI Images. Built a complete pipeline featuring a CNN for classification, image preprocessing, an interactive prediction dashboard, and integrated GPT-4.1 Nano for clinical recommendations.",
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "GPT-4.1 Nano", "React", "Vercel"],
            github: "https://github.com/yourusername/Kaneki",
            demo: "https://brain-scan-ai-frontend.vercel.app/",
            previewImage: brainscanDashboardImg,
            isIframeBlocked: true
        },
        {
            id: 2,
            title: "AI Teaching Assistant",
            filterCategory: "AI & ML",
            category: "LLM & Voice RAG Assistant",
            description: "AI-powered teaching assistant using GPT-4.1 Nano with RAG for context-aware Q&A. Integrated Whisper for voice interaction, automated MCQ generation for self-assessment, and an intelligent coding evaluation module.",
            technologies: ["Python", "GPT-4.1 Nano", "RAG", "Whisper", "Vector DB", "React", "Vercel"],
            github: "https://github.com/yourusername/Teaching_Assistant",
            demo: "https://teaching-assistant-frontend.vercel.app/",
            previewImage: teachingAssistantImg,
            isIframeBlocked: false
        },
        {
            id: 3,
            title: "Bias Detector",
            filterCategory: "Agents & LLMs",
            category: "Multi-Agent AI & Dataset Health",
            description: "Multi-Agent AI System for automated dataset quality analysis and bias detection. Built with CrewAI to run specialized agents in parallel, generating interactive health scores and AI-driven mitigation recommendations.",
            technologies: ["Python", "CrewAI", "Llama-3.1", "React", "TailwindCSS", "Vercel"],
            github: "https://github.com/yourusername/Chopper",
            demo: "https://bias-detector-nijanth.vercel.app/",
            previewImage: null,
            isIframeBlocked: false
        },
        {
            id: 4,
            title: "ResearchAI",
            filterCategory: "Agents & LLMs",
            category: "LangGraph & Academic Paper Analysis",
            description: "Autonomous multi-agent research analysis platform built with LangGraph. Automates scientific literature discovery across open APIs (arXiv, Semantic Scholar) and performs comparative synthesis and AI summarization.",
            technologies: ["Python", "LangGraph", "arXiv API", "Semantic Scholar", "LLMs", "React", "Vercel"],
            github: "https://github.com/yourusername/Research_Paper_Analyser",
            demo: "https://research-paper-analyser-nijanth.vercel.app/",
            previewImage: null,
            isIframeBlocked: false
        },
        {
            id: 5,
            title: "Nivo",
            filterCategory: "Full Stack",
            category: "AI Gaming Platform & Interactive Arcade",
            description: "Full-stack gaming platform with AI-powered game engines and arcade experiences. Features 8 playable games including Chess Arena with Minimax AI, Sudoku AI solver, Water Sort, 2048 with AI hints, and 3D Canvas games.",
            technologies: ["React", "JavaScript", "Minimax AI", "HTML5 Canvas", "TailwindCSS", "Vercel"],
            github: "https://github.com/pranesh-rvitm",
            demo: "https://playnivo.vercel.app/",
            previewImage: null,
            isIframeBlocked: false
        },
        {
            id: 6,
            title: "TaskFlow PRO",
            filterCategory: "Full Stack",
            category: "Productivity Suite & Workflow Engine",
            description: "Comprehensive task management application with real-time workflow tracking. Features hierarchical checklist steps, dynamic category color tagging, smart priority sorting, keyboard shortcuts, and analytics.",
            technologies: ["Django", "Python", "React", "REST API", "Render", "TailwindCSS"],
            github: "https://github.com/pranesh-rvitm",
            demo: "https://todo-0ai4.onrender.com/",
            previewImage: null,
            isIframeBlocked: false
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.filterCategory === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <div className="section-header-wrap">
                <h2 className="numbered-heading">03. Featured Projects</h2>
                <p className="section-subtitle">
                    Production web applications, multi-agent AI systems, and machine learning pipelines designed and engineered by me.
                </p>
            </div>

            {/* Filter Pills */}
            <div className="projects-filter-pills">
                {filterCategories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        className={`proj-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Projects Cards Grid */}
            <div className="projects-cards-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        {/* Browser mockup window preview */}
                        <ProjectCardPreview
                            project={project}
                            onMaximize={(p) => setActiveModalProject(p)}
                        />

                        {/* Card Content */}
                        <div className="project-card-body">
                            <div className="project-card-category-pill">
                                <Sparkles size={12} className="cat-sparkle" />
                                <span>{project.category}</span>
                            </div>

                            <h3 className="project-card-title">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>

                            <p className="project-card-desc">{project.description}</p>

                            <ul className="project-card-techs">
                                {project.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="project-card-footer">
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-footer-live-btn"
                                title="Open Live Application"
                            >
                                <ExternalLink size={14} />
                                <span>Live Demo</span>
                            </a>

                            <button
                                type="button"
                                onClick={() => setActiveModalProject(project)}
                                className="proj-footer-modal-btn"
                                title="Open Fullscreen Dashboard"
                            >
                                <Maximize2 size={14} />
                                <span>Fullscreen</span>
                            </button>

                            <a
                                href={project.github || "#"}
                                aria-label="GitHub Repository"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-footer-icon-btn"
                                title="Source Code"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Modal */}
            {activeModalProject && (
                <LiveAppModal
                    project={activeModalProject}
                    onClose={() => setActiveModalProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;

