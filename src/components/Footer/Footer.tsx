import { scrollToTop } from '../../utils/scrollToTop';
import { Logo } from '../Logo';
import styles from './Footer.module.scss';

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://github.com/yuriiyepikhov"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a className={styles.link} href="#">
          contacts
        </a>
        <a className={styles.link} href="#">
          rights
        </a>
      </div>

      <button className={styles.backToTop} onClick={scrollToTop}>
        Back to top
      </button>
    </div>
  </div>
);
