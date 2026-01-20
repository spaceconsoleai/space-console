import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" aria-label="Home" className={styles.link}>
      <img
        src="/src/components/Assets/logo_spaceconsole.png"
        alt="SpaceConsole AI"
        className={styles.logoImage}
        style={{ height: '32px' }}
      />
      <span className={styles.text}>SpaceConsole</span>
    </Link>
  );
}

export default Logo;
