// import Link from "next/link"
import styles from "./page.module.scss"
import Image from "next/image"
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['uk', 'en'] as const;
const { Link } = createSharedPathnamesNavigation({ locales });

const HomePage = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <Link className={styles.link} href="/poltava">
                Полтава
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.link} href="/cherkasy">
                Черкаси
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage