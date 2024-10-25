import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import Button from 'react-bootstrap/Button';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Page() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Navbar />
            <div className="container mt-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-body">
                            <div className="d-none d-md-block">
                                <h2 className="text-muted">TramHammer Technologies Administration</h2>
                                <h4 className="text-muted">Login</h4>
                                <p className="text-muted">Please log in to access the client area.</p>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-check text-start my-3">
                                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Remember me
                                        </label>
                                    </div>
                                    <Button variant="success" className="btn btn-primary w-100">Login</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}