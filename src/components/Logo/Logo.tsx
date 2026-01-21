import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logoDark from '../../assets/logo_spaceconsole.png'; // default/dark mode
import logoLight from '../../assets/logo_white.png'; // light mode
import { useTheme } from '../../context/ThemeContext';

function Logo() {
  const { theme } = useTheme();

  return (
    <Link to="/" aria-label="Home" className={styles.link}>
      <img
        src={theme === 'dark' ? logoDark : logoLight}
        alt="SpaceConsole AI"
        className={styles.logoImage}
        style={{ height: '32px' }}
      />
      <span className={styles.text}>SpaceConsole</span>
    </Link>
  );
}

export default Logo;
