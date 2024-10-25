import React from 'react';
import Link from 'next/link'

const Footer = () => {


    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <p className="mb-1 text-center">&copy; {new Date().getFullYear()} TramHammer Technologies. All rights reserved.</p>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/terms">Terms and Conditions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="mailto:contact@tramhammer.org">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
export default Footer;