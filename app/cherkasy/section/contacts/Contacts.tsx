import Title from '@/app/components/title/Title'
import styles from './Contacts.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section>
      <div className="container">
        <Title title={'h2'}>Контакти</Title>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>
              Адреса
            </h3>
            <ul className={styles.list}>
              <li className={styles.adressa}>
                <a className={styles.link} target='_blanck' href="https://www.google.com/maps/place/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+Old+Dutch+%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D0%B8/@49.4427922,32.0559603,17z/data=!3m1!4b1!4m6!3m5!1s0x40d14d0462bf9c9f:0x9ec050c8fb47a1ae!8m2!3d49.4427922!4d32.0559603!16s%2Fg%2F11j1fyzqw8?entry=ttu">
                  Байди Вишневецького 48
                  м.Черкаси
                </a>
              </li>
              <li className={styles.phone}>
                <a className={styles.link} href="tel:+380504051414">
                  +38 (050) 405-14-14
                </a>
              </li>
              <li className={styles.phone}>
                <a className={styles.link} href="tel:+380984051414">
                  +38 (098) 405-14-14
                </a>
              </li>

            </ul>

          </div>
          <div className={styles.item}>
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
          <div className={styles.item}>
            <Link className={styles.oferta} href="/oferta.docx">
              Публічна оферта
            </Link>
            <p className={styles.text}>
              Відділ маркетингу
            </p>
            <a className={styles.link} href="mailto:">marketing@old-dutch.com.ua</a>
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
      </div>
    </section>
  )
}

export default Contacts