import Image from 'next/image'
import Title from '../title/Title'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer} id='contacts'>
      <div className="container">
        <Title title={'h2'}>Контакти</Title>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Адреса
              </h3>
              <a className={styles.link} target='_blanck' href="https://www.google.com.ua/maps/place/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+Old+Dutch+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0/@49.5867417,34.5555208,15z/data=!4m6!3m5!1s0x40d82f5f9ec2effb:0x94856ad1e0086c18!8m2!3d49.5867321!4d34.5555633!16s%2Fg%2F11c2qf890d?entry=ttu">Котляревського, 15 Полтава</a>
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
                <a className={styles.social} href="https://www.facebook.com/old.dutch.barbeshop/">
                  <Image src='/image/icons/facebook.svg' alt='Соціальної мережі значок Facebook' width={50} height={50} />
                </a>
                <a className={styles.social} href="https://www.instagram.com/old.dutch.plt/">
                  <Image src='/image/icons/instagram.svg' alt='Соціальної мережі значок Instagram' width={50} height={50} />
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.store}>
                <a className={styles.link} href="https://play.google.com/store/apps/details?id=com.yclients.mobile.g38094">
                  <Image src='/image/icons/play-market.svg' alt='Значок магазину додатку Google play market' width={120} height={40} />
                </a>
                <a className={styles.link} href="https://apps.apple.com/ua/app/old-dutch-barbershop/id1552278684?l=uk">
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