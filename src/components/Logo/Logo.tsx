import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../assets/logo_spaceconsole.png';

function Logo() {
  return (
    <Link to="/" aria-label="Home" className={styles.link}>
      <img
        src={logo}
        alt="SpaceConsole AI"
        className={styles.logoImage}
        style={{ height: '32px' }}
      />
      <span className={styles.text}>SpaceConsole</span>
    </Link>
  );
}

export default Logo;
