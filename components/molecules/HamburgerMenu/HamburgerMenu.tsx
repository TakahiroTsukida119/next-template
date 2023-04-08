import { useState } from 'react';
import styles from './HamburgerMenu.module.scss';

interface HamburgerProps {
  isOpen: boolean;
}

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <a className={styles.menuItem} href="#">
          Home
        </a>
        <a className={styles.menuItem} href="#">
          About
        </a>
        <a className={styles.menuItem} href="#">
          Services
        </a>
        <a className={styles.menuItem} href="#">
          Contact
        </a>
      </div>
    </>
  );
};
