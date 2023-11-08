import Image from 'next/image'
import Title from '../title/Title'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Title title={'h2'}>Контакти</Title>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Адреса
              </h3>
              <a className={styles.link} target='_blanck' href="https://www.google.com/maps/search/?api=1&query=Котляревського,15 Полтава">Котляревського, 15 Полтава</a>
            </div>

            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Телефони
              </h3>
              <div className={styles.phones}>
                <a className={styles.link} href="tel:+380985071414">
                  +38 (098) 507-14-14
                </a>
                <a className={styles.link} href="tel:+380955071414">
                  +38 (095) 507-14-14
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Відділ маркетингу
              </h3>
              <a className={styles.link} href="mailto:marketing@old-dutch.com.ua">
                marketing@old-dutch.com.ua
              </a>
            </div>
            <div className={styles.block}>
              <div className={styles.socials}>
                <a className={styles.social} href="#">
                  <Image src='/image/icons/facebook.svg' alt='Соціальної мережі значок Facebook' width={50} height={50} />
                </a>
                <a className={styles.social} href="#">
                  <Image src='/image/icons/instagram.svg' alt='Соціальної мережі значок Instagram' width={50} height={50} />
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.store}>
                <a className={styles.link} href="#">
                  <Image src='/image/icons/play-market.svg' alt='Значок магазину додатку Google play market' width={120} height={40} />
                </a>
                <a className={styles.link} href="#">
                  <Image src='/image/icons/app-store.svg' alt='Значок магазину додатку Apple App Store' width={120} height={40} />
                </a>
              </div>
            </div>

          </div>
          <div className={styles.item}>
            <nav className="menu">
              <ul className={styles.list}>
                <li>
                  <div className={styles.block}>
                    <Link className={styles.link} href="#">Головна</Link>
                  </div>
                </li>
                <li>
                  <div className={styles.block}>
                    <Link className={styles.link} href="#">Про нас</Link>
                  </div>
                </li>
                <li>
                  <div className={styles.block}>
                    <Link className={styles.link} href="#">Майстри</Link>
                  </div>
                </li>
                <li>
                  <div className={styles.block}>
                    <Link className={styles.link} href="#">Послуги</Link>
                  </div>
                </li>
                <li>
                  <div className={styles.block}>
                    <Link className={styles.link} href="#">Правила закладу</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.item}>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Графік работи:
              </h3>
              <ul className={styles.schedule}>
                <li>
                  пн. 11:00 - 21:00
                </li>
                <li>
                  вт. 10:00 - 21:00
                </li>
                <li>
                  ср. 10:00 - 21:00
                </li>
                <li>
                  чт. 10:00 - 21:00
                </li>
                <li>
                  пт. 10:00 - 21:00
                </li>
                <li>
                  сб. 10:00 - 21:00
                </li>
                <li>
                  нд. 10:00 - 21:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer