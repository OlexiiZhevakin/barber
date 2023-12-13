

import Image from 'next/image'
import Title from '../title/Title'
import styles from './Footer.module.scss'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className={styles.footer} id='contacts'>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.inner}>
            <Link href='/'>
              <Image className={styles.logo} src='/image/logo.svg' alt='Логотип сайту' width={200} height={80} />
            </Link>
            <nav className="menu">
              <ul>
                <li>
                  <Link className={styles.link} href="#">Головна</Link>
                </li>
                <li>
                  <Link className={styles.link} href="#">Про нас</Link>
                </li>
                <li>
                  <Link className={styles.link} href="#">Майстри</Link>
                </li>
                <li>
                  <Link className={styles.link} href="#">Послуги</Link>
                </li>
                <li>
                  <Link className={styles.link} href="#">Контакти</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.socials}>
              <a className={styles.social} href="https://www.facebook.com/old.dutch.barbeshop/">
                <Image src='/image/icons/facebook.svg' alt='Соціальної мережі значок Facebook' width={50} height={50} />
              </a>
              <a className={styles.social} href="https://www.instagram.com/old.dutch.plt/">
                <Image src='/image/icons/instagram.svg' alt='Соціальної мережі значок Instagram' width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer