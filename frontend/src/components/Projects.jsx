import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, RotateCw, X, Lock, Maximize2, Sparkles } from 'lucide-react';
import brainscanDashboardImg from '../assets/projects/brainscan.png';
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
                                src={project.dashboardImage} 
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

// Live Desktop Dashboard Viewport Scaler
const LiveDashboardFrame = ({ project, onMaximize }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(0.5);
    const [isLoading, setIsLoading] = useState(true);
    const [reloadKey, setReloadKey] = useState(0);

    const DESKTOP_WIDTH = 1280;
    const DESKTOP_HEIGHT = 760;

    useEffect(() => {
        if (!containerRef.current) return;
        const updateScale = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                if (width > 0) {
                    setScale(width / DESKTOP_WIDTH);
                }
            }
        };
        updateScale();
        const observer = new ResizeObserver(updateScale);
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const handleReload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        setReloadKey(prev => prev + 1);
    };

    const displayUrl = project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const calculatedHeight = Math.max(260, Math.round(DESKTOP_HEIGHT * scale));

    return (
        <div className="dashboard-mockup-window">
            {/* Window Chrome Header */}
            <div className="dashboard-chrome-bar">
                <div className="dashboard-dots">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-min"></span>
                    <span className="dot dot-max"></span>
                </div>

                <div className="dashboard-url-bar">
                    <Lock size={12} className="url-lock-icon" />
                    <span className="dashboard-url-text">{displayUrl}</span>
                    <div className="live-status-pill">
                        <span className="live-pulse-dot"></span>
                        <span>LIVE</span>
                    </div>
                </div>

                <div className="dashboard-controls">
                    {!project.isIframeBlocked && (
                        <button 
                            type="button" 
                            onClick={handleReload}
                            className="chrome-btn" 
                            title="Reload App Dashboard"
                            aria-label="Reload App Dashboard"
                        >
                            <RotateCw size={13} />
                        </button>
                    )}
                    <button 
                        type="button" 
                        onClick={() => onMaximize(project)}
                        className="chrome-btn" 
                        title="Expand Full Screen"
                        aria-label="Expand Full Screen"
                    >
                        <Maximize2 size={13} />
                    </button>
                    <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="chrome-btn"
                        title="Open in New Tab"
                        aria-label="Open in New Tab"
                    >
                        <ExternalLink size={13} />
                    </a>
                </div>
            </div>

            {/* Desktop Dashboard Viewport Canvas */}
            <div 
                className="dashboard-canvas-viewport" 
                ref={containerRef}
                style={{ height: `${calculatedHeight}px` }}
            >
                {project.isIframeBlocked ? (
                    <div className="dashboard-static-preview" onClick={() => onMaximize(project)}>
                        <img 
                            src={project.dashboardImage} 
                            alt={`${project.title} Live Dashboard`} 
                            className="dashboard-preview-img"
                        />
                        <div className="dashboard-img-overlay">
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="dashboard-overlay-cta"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>Open Live Web App</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoading && (
                            <div className="dashboard-loading-overlay">
                                <div className="dashboard-spinner"></div>
                                <span className="loading-label">Loading {project.title} Live Dashboard...</span>
                            </div>
                        )}
                        <iframe
                            key={reloadKey}
                            src={project.demo}
                            title={`${project.title} Live Dashboard`}
                            className={`dashboard-iframe-scaled ${isLoading ? 'is-loading' : 'is-ready'}`}
                            style={{
                                width: `${DESKTOP_WIDTH}px`,
                                height: `${DESKTOP_HEIGHT}px`,
                                transform: `scale(${scale})`,
                                transformOrigin: 'top left',
                            }}
                            onLoad={() => setIsLoading(false)}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeModalProject, setActiveModalProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "BrainScanAI",
            category: "Deep Learning & Medical AI",
            description: "Deep Learning-Based Brain Tumor Detection using MRI Images. Built a complete pipeline featuring a CNN for classification, image preprocessing, a modern prediction dashboard, and integrated an LLM (GPT-4.1 Nano) for medical recommendations.",
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "GPT-4.1 Nano", "Vercel", "React"],
            github: "https://github.com/yourusername/Kaneki",
            demo: "https://brain-scan-ai-frontend.vercel.app/",
            dashboardImage: brainscanDashboardImg,
            isIframeBlocked: true
        },
        {
            id: 2,
            title: "AI Teaching Assistant",
            category: "LLM & Voice RAG Assistant",
            description: "AI-powered teaching assistant using GPT-4.1 Nano with RAG for context-aware Q&A. Integrated Whisper for voice interaction, automated MCQ generation for self-assessment, and a coding evaluation module.",
            technologies: ["Python", "GPT-4.1 Nano", "RAG", "Whisper", "Vector Database", "Vercel", "React"],
            github: "https://github.com/yourusername/Teaching_Assistant",
            demo: "https://teaching-assistant-frontend.vercel.app/",
            isIframeBlocked: false
        },
        {
            id: 3,
            title: "Bias Detector",
            category: "Multi-Agent AI & Dataset Health",
            description: "Multi-Agent AI System for automated dataset quality analysis and bias detection. Built with CrewAI to run specialized agents in parallel, providing interactive dataset health scores and AI-driven improvement recommendations.",
            technologies: ["Python", "CrewAI", "Llama-3.1", "React", "Vercel", "TailwindCSS"],
            github: "https://github.com/yourusername/Chopper",
            demo: "https://bias-detector-nijanth.vercel.app/",
            isIframeBlocked: false
        },
        {
            id: 4,
            title: "ResearchAI",
            category: "LangGraph & Academic Paper Analysis",
            description: "Autonomous multi-agent research analysis platform built with LangGraph. Automates scientific literature discovery across open-source APIs (arXiv, Semantic Scholar) and performs in-depth paper synthesis, comparative analysis, and AI summarization.",
            technologies: ["Python", "LangGraph", "arXiv API", "Semantic Scholar", "LLMs", "React", "Vercel"],
            github: "https://github.com/yourusername/Research_Paper_Analyser",
            demo: "https://research-paper-analyser-nijanth.vercel.app/",
            isIframeBlocked: false
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="numbered-heading">03. Some Things I've Built</h2>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={project.id} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="project-content">
                            <div className="project-label">Featured Project • {project.category}</div>
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
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-live-btn"
                                    title="Open Live Web Application"
                                >
                                    <span>Open Live App</span>
                                    <ExternalLink size={15} />
                                </a>
                                <button 
                                    type="button" 
                                    onClick={() => setActiveModalProject(project)}
                                    className="project-maximize-btn"
                                    title="Expand Full Screen Dashboard"
                                >
                                    <Maximize2 size={16} />
                                    <span>Full Screen</span>
                                </button>
                                <a 
                                    href={project.github || "#"} 
                                    aria-label="GitHub Repository" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-icon-link"
                                    title="View Source Code on GitHub"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="project-preview-wrapper">
                            <LiveDashboardFrame 
                                project={project} 
                                onMaximize={(p) => setActiveModalProject(p)} 
                            />
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
