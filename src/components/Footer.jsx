import React from 'react';
import Link from 'next/link'

const Footer = () => {


    return (
        <div className='container'>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <img>
                    </img>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
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
        </footer>
        </div>
    );
};
export default Footer;