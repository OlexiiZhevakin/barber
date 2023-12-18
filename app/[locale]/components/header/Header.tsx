'use client'
import { useState, useEffect } from 'react';
import styles from './Header.module.scss'
import Image from 'next/image'
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['uk', 'en'] as const;
const { Link } = createSharedPathnamesNavigation({ locales });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isOpen) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={`${styles.btn} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
          </div>
          <Link href='/'>
            <Image className={styles.logo} src='/image/logo.svg' alt='Логотип сайту' width={200} height={80} />
          </Link>
          <Link href='tel:00000000'>
            <Image className={styles.phone} src='/image/phone.svg' alt='Кнопка телефона' width={40} height={40} />
          </Link>
        </div>
        <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href="#home" onClick={closeMenu}>Головна</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#about" onClick={closeMenu}>Про нас</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#masters" onClick={closeMenu}>Майстри</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#services" onClick={closeMenu}>Послуги</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#rules" onClick={closeMenu}>Правила закладу</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#contacts" onClick={closeMenu}>Контакти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
