'use client'
import { useState } from 'react';
import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={`${styles.btn} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
          </div>
          <Link href='/'>
            <Image className={styles.logo} src='/image/logo.svg' alt='Логотип сайту' width={263} height={148} />
          </Link>
          <Link href='tel:00000000'>
            <Image className={styles.phone} src='/image/phone.svg' alt='Кнопка телефона' width={69} height={69} />
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
