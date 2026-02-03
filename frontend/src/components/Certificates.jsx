import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Certificates.css';
import djangoCert from '../assets/certificates/django.png';
import pythonCert from '../assets/certificates/python.png';

const certificateHighlights = [
    {
        id: 'python-cert',
        title: 'Python Programming Certificate',
        issuer: 'Python Institute',
        year: '2025',
        credentialId: 'PY-2025-001',
        earnedDate: 'January 2025',
        description: 'Successfully completed comprehensive Python programming certification, demonstrating proficiency in Python fundamentals, object-oriented programming, data structures, and advanced Python concepts.',
        link: pythonCert,
        image: pythonCert
    },
    {
        id: 'django-cert',
        title: 'Django Web Development Certificate',
        issuer: 'Django Software Foundation',
        year: '2025',
        credentialId: 'DJ-2025-001',
        earnedDate: 'January 2025',
        description: 'Certified in building scalable web applications using Django framework. Expertise in MVT architecture, Django ORM, REST APIs, authentication, and deployment of production-ready Django applications.',
        link: djangoCert,
        image: djangoCert
    },
    {
        id: 'ms-nlp',
        title: 'Microsoft Applied Skills: Build a NLP solution with Azure AI Language',
        issuer: 'Microsoft',
        year: '2025',
        credentialId: '8C4C732F13FCD0',
        earnedDate: 'May 17, 2025',
        description: 'Successfully completed the Microsoft Applied Skills certification on building a Natural Language Processing (NLP) solution using Azure AI Language, showcasing skills in analyzing text, extracting insights, and developing intelligent language applications.',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/8C4C732F13FCD0',
        image: 'https://via.placeholder.com/800x500/64ffda/0a192f?text=Microsoft+Azure+NLP'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="certificates-section">
            <h2 className="numbered-heading">04. Certifications & Achievements</h2>
            
            <div className="certificates-list">
                {certificateHighlights.map((certificate, index) => (
                    <div key={certificate.id} className={`featured-certificate ${index % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="certificate-content">
                            <div className="certificate-label">Featured Certificates</div>
                            <h3 className="certificate-title">{certificate.title}</h3>
                            <div className="certificate-description-box">
                                <p>{certificate.description}</p>
                            </div>
                            <div className="certificate-meta">
                                <div className="certificate-info">
                                    <span className="certificate-issuer">{certificate.issuer}</span>
                                    <span className="certificate-date">Earned: {certificate.earnedDate}</span>
                                    <span className="certificate-id">Credential ID: {certificate.credentialId}</span>
                                </div>
                            </div>
                            <div className="certificate-links">
                                <a 
                                    href={certificate.link || "#"} 
                                    className="certificate-verify-btn"
                                    aria-label="Verify Certificate" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} />
                                    <span>Verify Certificate</span>
                                </a>
                            </div>
                        </div>
                        <div className="certificate-image">
                            <a href={certificate.link || "#"} target="_blank" rel="noopener noreferrer">
                                <img src={certificate.image} alt={certificate.title} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
