import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <Logo />
          <p className={styles.tagline}>
            Turn your process into a live system: map it, measure it, fix it.
          </p>
          <div className={styles.socials}>
            {/* Placeholders for social icons */}
            <span className={styles.socialIcon}>Li</span>
            <span className={styles.socialIcon}>X</span>
            <span className={styles.socialIcon}>Gh</span>
          </div>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              <li><Link to="/product">Overview</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/integrations">Integrations</Link></li>
              <li><Link to="#">Changelog</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Use Cases</h4>
            <ul>
              <li><Link to="/use-cases/manufacturing">Manufacturing</Link></li>
              <li><Link to="/use-cases/service-ops">Service Ops</Link></li>
              <li><Link to="/use-cases/revops">RevOps</Link></li>
              <li><Link to="/use-cases/marketing">Marketing</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/resources">Blog</Link></li>
              <li><Link to="/resources">Guides</Link></li>
              <li><Link to="/resources">Help Center</Link></li>
              <li><Link to="/resources">API Docs</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><Link to="/company">About</Link></li>
              <li><Link to="/company">Contact</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="/legal/privacy">Privacy</Link></li>
              <li><Link to="/legal/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Space Console AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
