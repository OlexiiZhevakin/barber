import Title from '@/app/[locale]/components/title/Title'
import styles from './Contacts.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const Contacts = () => {
  const t = useTranslations('Contacts');
  return (
    <section>
      <div className="container">
        <Title title={'h2'}>{t('title')}</Title>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>
              {t('subtitle1')}
            </h3>
            <ul className={styles.list}>
              <li className={styles.adressa}>
                <a className={styles.link} target='_blanck' href="https://www.google.com.ua/maps/place/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+Old+Dutch+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0/@49.5867417,34.5555208,15z/data=!4m6!3m5!1s0x40d82f5f9ec2effb:0x94856ad1e0086c18!8m2!3d49.5867321!4d34.5555633!16s%2Fg%2F11c2qf890d?entry=ttu">
                  {t('text1')}
                </a>
              </li>
              <li className={styles.phone}>
                <a className={styles.link} href="tel:+380985071414">
                  +38 (098) 507-14-14
                </a>
              </li>
              <li className={styles.phone}>
                <a className={styles.link} href="tel:+380955071414">
                  +38 (095) 507-14-14
                </a>
              </li>

            </ul>
            <ul className={styles.list}>
              <li className={styles.adressa}>
                <a className={styles.link} target='_blanck' href="https://www.google.com.ua/maps/place/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+Old+Dutch+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0/@49.5867417,34.5555208,15z/data=!4m6!3m5!1s0x40d82f5f9ec2effb:0x94856ad1e0086c18!8m2!3d49.5867321!4d34.5555633!16s%2Fg%2F11c2qf890d?entry=ttu">
                  {t('text2')}
                </a>
              </li>
              <li className={styles.phone}>
                <a className={styles.link} href="tel:+380985071414">
                  +38 (050) 675-14-14
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>
              {t('subtitle2')}
            </h3>
            <ul className={styles.schedule}>
              <li>
                {t('grafic1')}. 11:00 - 21:00
              </li>
              <li>
                {t('grafic2')}. 10:00 - 21:00
              </li>
              <li>
                {t('grafic3')}. 10:00 - 21:00
              </li>
              <li>
                {t('grafic4')}. 10:00 - 21:00
              </li>
              <li>
                {t('grafic5')}. 10:00 - 21:00
              </li>
              <li>
                {t('grafic6')}. 10:00 - 21:00
              </li>
              <li>
                {t('grafic7')}. 10:00 - 21:00
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <Link className={styles.oferta} href="/oferta.docx">
              {t('oferta')}
            </Link>
            <p className={styles.text}>
              {t('marketing')}
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