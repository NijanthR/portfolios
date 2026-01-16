import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certificateHighlights = [
    {
        id: 'aws-saa',
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        year: '2025',
        credentialId: 'ABC-4321',
        skills: ['Well-Architected', 'Serverless', 'Cost Optimization'],
        link: 'https://www.credly.com/badges/aws-solutions-architect-associate'
    },
    {
        id: 'gcp-pde',
        title: 'Google Professional Data Engineer',
        issuer: 'Google Cloud',
        year: '2024',
        credentialId: 'GCP-8820',
        skills: ['Pipelines', 'BigQuery', 'MLOps'],
        link: 'https://www.credential.net/google-data-engineer'
    },
    {
        id: 'meta-front-end',
        title: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta / Coursera',
        year: '2023',
        credentialId: 'META-2210',
        skills: ['React', 'Testing', 'Accessibility'],
        link: 'https://www.coursera.org/account/accomplishments/certificate/meta-front-end'
    }
];

const Certificates = () => {
    return (
        <aside className="certificates-panel certificates-panel--stacked">
            <div className="certificates-header">
                <div>
                    <p className="certificates-eyebrow">Credentials</p>
                    <h3 className="certificates-title">Recent Certificates</h3>
                </div>
                <Award size={32} />
            </div>
            <ul className="certificates-list">
                {certificateHighlights.map((certificate) => (
                    <li key={certificate.id} className="certificate-card">
                        <div className="certificate-main">
                            <p className="certificate-title">{certificate.title}</p>
                            <p className="certificate-issuer">{certificate.issuer}</p>
                        </div>
                        <div className="certificate-meta-row">
                            <span className="certificate-year">{certificate.year}</span>
                            <a
                                href={certificate.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-link"
                            >
                                Verify
                                <ExternalLink size={16} />
                            </a>
                        </div>
                        <div className="certificate-skills">
                            {certificate.skills.map((skill) => (
                                <span key={skill} className="certificate-skill">{skill}</span>
                            ))}
                        </div>
                        <span className="certificate-id">Credential ID: {certificate.credentialId}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Certificates;
