import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', number: '01.' },
        { name: 'Skills', href: '#skills', number: '02.' },
        { name: 'Projects', href: '#projects', number: '03.' },
        { name: 'Certificates', href: '#certificates', number: '04.' },
        { name: 'Contact', href: '#contact', number: '05.' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">Portfolio</a>

                <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                        >
                            <span style={{ color: 'var(--accent-primary)', marginRight: '5px' }}>{link.number}</span>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
