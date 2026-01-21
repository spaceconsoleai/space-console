import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../UI/Button';
import styles from './Header.module.css';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const links = [
  { to: '/product', label: 'Product' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/resources', label: 'Resources' },
  { to: '/company', label: 'Company' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} glass-panel`}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${styles.desktopNav}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Button to="/book-demo" variant="glass" className={styles.cta}>
            Book a Demo
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className={styles.mobileActions}>
            <Button to="/book-demo" variant="primary" style={{ width: '100%' }} onClick={() => setIsMenuOpen(false)}>
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
