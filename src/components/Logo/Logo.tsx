import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => (
  <Link to="/" className={styles.logoLink}>
    <img className={styles.logoImg} src="img/icons/logo.svg" alt="Logo" />
  </Link>
);
