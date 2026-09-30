import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Calendar, CheckCircle2, X, ZoomIn, Sparkles } from 'lucide-react';
import './Certificates.css';
import ragCert from '../assets/certificates/rag.png';
import voiceAiCert from '../assets/certificates/voice-ai.png';
import promptEngCert from '../assets/certificates/prompt-engineering.png';
import djangoCert from '../assets/certificates/django.png';
import pythonCert from '../assets/certificates/python.png';

const certificatesData = [
    {
        id: 'rag-cert',
        title: 'Retrieval-Augmented Generation (RAG)',
        category: 'GenAI & RAG',
        badge: 'RAG Architecture',
        issuer: 'Navigate Labs & Bannari Amman Institute of Technology',
        issuerShort: 'Navigate Labs & BIT',
        year: '2026',
        credentialId: '10-Month Gen AI Programme',
        earnedDate: '2026',
        capstone: 'Tanishq Jewellery Finder',
        description: 'Completed 4-week intensive hands-on training in Retrieval-Augmented Generation (RAG), vector embeddings, and semantic search under the 10-month Gen AI Programme. Built an end-to-end capstone project.',
        image: ragCert
    },
    {
        id: 'voice-ai-cert',
        title: 'Voice Artificial Intelligence',
        category: 'Voice AI',
        badge: 'Speech & Audio AI',
        issuer: 'Navigate Labs & Bannari Amman Institute of Technology',
        issuerShort: 'Navigate Labs & BIT',
        year: '2026',
        credentialId: '10-Month Gen AI Programme',
        earnedDate: '2026',
        capstone: 'VS Code Extension',
        description: 'Completed 4-week intensive hands-on training in Voice Artificial Intelligence, speech recognition, and audio-driven AI agents as part of the 10-month Gen AI Programme.',
        image: voiceAiCert
    },
    {
        id: 'prompt-eng-cert',
        title: 'Prompt Engineering (GenAI)',
        category: 'Prompt Engineering',
        badge: 'LLM Prompting',
        issuer: 'Navigate Labs & Bannari Amman Institute of Technology',
        issuerShort: 'Navigate Labs & BIT',
        year: '2026',
        credentialId: '10-Month Gen AI Programme',
        earnedDate: 'Dec 2025 - Jan 2026',
        capstone: 'Loan Document Regulatory Assistant',
        description: 'Completed 4-week intensive training in advanced prompt engineering, few-shot prompting, and chain-of-thought workflows. Built an automated regulatory compliance assistant.',
        image: promptEngCert
    },
    {
        id: 'python-cert',
        title: 'Python Programming Certificate',
        category: 'Programming',
        badge: 'Core Python',
        issuer: 'Python Institute',
        issuerShort: 'Python Institute',
        year: '2025',
        credentialId: 'PY-2025-001',
        earnedDate: 'January 2025',
        capstone: null,
        description: 'Demonstrated mastery in Python fundamentals, object-oriented architecture, data structures, algorithms, and advanced backend development paradigms.',
        image: pythonCert
    },
    {
        id: 'django-cert',
        title: 'Django Web Development Certificate',
        category: 'Web Framework',
        badge: 'Django & REST',
        issuer: 'Django Software Foundation',
        issuerShort: 'Django Foundation',
        year: '2025',
        credentialId: 'DJ-2025-001',
        earnedDate: 'January 2025',
        capstone: null,
        description: 'Certified in architecting scalable web applications, MVT design pattern, Django ORM, REST API integrations, user authentication, and secure production deployment.',
        image: djangoCert
    }
];

// High-resolution certificate modal preview
const CertificateModal = ({ certificate, onClose }) => {
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

    return (
        <div className="cert-modal-backdrop" onClick={onClose}>
            <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="cert-modal-header">
                    <div className="cert-modal-title-area">
                        <Award size={18} className="cert-modal-icon" />
                        <div>
                            <h4>{certificate.title}</h4>
                            <span>{certificate.issuer}</span>
                        </div>
                    </div>
                    <div className="cert-modal-actions">
                        <a
                            href={certificate.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-modal-action-btn"
                            title="Open Full Image"
                        >
                            <ExternalLink size={16} />
                        </a>
                        <button
                            type="button"
                            onClick={onClose}
                            className="cert-modal-close-btn"
                            title="Close (Esc)"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
                <div className="cert-modal-body">
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="cert-modal-img"
                    />
                </div>
                {certificate.capstone && (
                    <div className="cert-modal-footer">
                        <span className="cert-modal-capstone-tag">
                            <Sparkles size={13} />
                            <strong>Capstone Project:</strong> {certificate.capstone}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'GenAI & RAG', 'Voice AI', 'Prompt Engineering', 'Programming', 'Web Framework'];

    const filteredCertificates = activeFilter === 'All'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === activeFilter);

    return (
        <section id="certificates" className="certificates-section">
            <div className="section-header-wrap">
                <h2 className="numbered-heading">04. Certifications & Achievements</h2>
                <p className="section-subtitle">
                    Verified credentials and intensive training milestones in Generative AI, RAG architectures, and Full-Stack Engineering.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="cert-filter-pills">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        className={`cert-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Certificate Cards Grid */}
            <div className="cert-cards-grid">
                {filteredCertificates.map((cert) => (
                    <div key={cert.id} className="cert-card">
                        {/* Certificate Image Banner */}
                        <div className="cert-card-media" onClick={() => setSelectedCert(cert)}>
                            <img src={cert.image} alt={cert.title} loading="lazy" />
                            <div className="cert-media-badge">{cert.badge}</div>
                            <div className="cert-media-overlay">
                                <span className="cert-preview-trigger">
                                    <ZoomIn size={16} />
                                    <span>Preview Certificate</span>
                                </span>
                            </div>
                        </div>

                        {/* Certificate Body */}
                        <div className="cert-card-body">
                            <div className="cert-issuer-badge">
                                <Award size={13} />
                                <span>{cert.issuerShort}</span>
                            </div>

                            <h3 className="cert-card-title">{cert.title}</h3>

                            {cert.capstone && (
                                <div className="cert-capstone-box">
                                    <Sparkles size={13} className="cert-sparkle-icon" />
                                    <span><strong>Capstone:</strong> {cert.capstone}</span>
                                </div>
                            )}

                            <p className="cert-card-desc">{cert.description}</p>

                            <div className="cert-card-meta">
                                <span className="cert-meta-item">
                                    <Calendar size={12} />
                                    {cert.earnedDate}
                                </span>
                                <span className="cert-meta-item">
                                    <CheckCircle2 size={12} />
                                    {cert.credentialId}
                                </span>
                            </div>
                        </div>

                        {/* Certificate Footer */}
                        <div className="cert-card-footer">
                            <button
                                type="button"
                                className="cert-view-btn"
                                onClick={() => setSelectedCert(cert)}
                            >
                                <ZoomIn size={14} />
                                <span>View Certificate</span>
                            </button>
                            <a
                                href={cert.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-direct-btn"
                                title="Open in New Tab"
                                aria-label="Open Certificate in New Tab"
                            >
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {selectedCert && (
                <CertificateModal
                    certificate={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </section>
    );
};

export default Certificates;

