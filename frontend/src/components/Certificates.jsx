import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Certificates.css';

// TODO: Upload your images to frontend/src/assets/certificates/ folder
// Then uncomment the imports below and use them in the image property
// import msAzureImg from '../assets/certificates/microsoft-azure-nlp.png';
// import awsImg from '../assets/certificates/aws-solutions-architect.png';
// import gcpImg from '../assets/certificates/google-data-engineer.png';

const certificateHighlights = [
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
    },
    {
        id: 'aws-saa',
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        year: '2024',
        credentialId: 'ABC-4321',
        earnedDate: 'December 10, 2024',
        description: 'Demonstrated expertise in designing distributed systems and applications on AWS platform. Proficient in implementing scalable, highly available, fault-tolerant systems with cost optimization best practices.',
        link: 'https://www.credly.com/badges/aws-solutions-architect-associate',
        image: 'https://via.placeholder.com/800x500/ff9900/232f3e?text=AWS+Solutions+Architect'
    },
    {
        id: 'gcp-pde',
        title: 'Google Professional Data Engineer',
        issuer: 'Google Cloud',
        year: '2024',
        credentialId: 'GCP-8820',
        earnedDate: 'August 22, 2024',
        description: 'Certified in designing, building, and operationalizing data processing systems on Google Cloud Platform. Expertise in data pipelines, BigQuery analytics, and machine learning operations.',
        link: 'https://www.credential.net/google-data-engineer',
        image: 'https://via.placeholder.com/800x500/4285f4/ffffff?text=Google+Cloud+Data+Engineer'
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
