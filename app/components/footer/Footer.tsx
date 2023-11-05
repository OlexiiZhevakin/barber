import Title from '../title/Title'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Title title={'h2'}>Контакти</Title>
        <div className={styles.wrapper}>
          
          <div className={styles.block}>
            <h3 className={styles.title}>
              Адреса
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                Котляревського, 15Полтава
              </li>
              <li className={styles.item}>
                +38 (098) 507-14-14
              </li>
              <li className={styles.item}>
                +38 (095) 507-14-14Адреса
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              Графік работи:
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                пн. 11:00 - 21:00
              </li>
              <li className={styles.item}>
                вт. 10:00 - 21:00
              </li>
              <li className={styles.item}>
                ср. 10:00 - 21:00
              </li>
              <li className={styles.item}>
                чт. 10:00 - 21:00
              </li>
              <li className={styles.item}>
                пт. 10:00 - 21:00
              </li>
              <li className={styles.item}>
                сб. 10:00 - 21:00
              </li>
              <li className={styles.item}>
                нд. 10:00 - 21:00
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>
              Відділ маркетингу
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="mailto:marketing@old-dutch.com.ua">
                  marketing@old-dutch.com.ua
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer