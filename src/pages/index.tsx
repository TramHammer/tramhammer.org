import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logonav}>
            <span className={styles.logo}>
              <Link href="/">Logo</Link>
            </span>
        </div>
        <nav>
          <div className={styles.nav}>
            <ul>
              <li className={styles.floatleft}>
                <Link className={styles.link} href="/">Home</Link>
              </li>
              <li className={styles.floatleft}>
                <Link className={styles.link} href="/about">About</Link>
              </li>
              <li className={styles.floatleft}>
                <Link className={styles.link} href="/services">Services</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.floatright}>
                <Link className={styles.link} href="#0">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.heroText}>
          <h1>Welcome to shit</h1>
          <p>Your one-stop solution for all your needs.</p>
      </div>
      </header>
      <section className={styles.cards}>
        <div className={styles.card}>
          <h2>System Administration</h2>
          <p>Efficient and reliable system administration services to keep your infrastructure running smoothly.</p>

        </div>
        <div className={styles.card}>
          <h2>Technical Support</h2>
          <p>24/7 technical support to assist you with any issues and ensure minimal downtime.</p>
        </div>
        <div className={styles.card}>
          <h2>Management and Monitoring</h2>
          <p>Comprehensive management and monitoring solutions to keep your systems secure and optimized.</p>

        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link className={styles.link} href="/privacy">Privacy Policy</Link>
            <Link className={styles.link} href="/terms">Terms of Service</Link>
            <Link className={styles.link} href="/contact">Contact Us</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}