import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.btn}>
            <span></span>
          </div>
          <Link href='/'>
            <Image className={styles.logo} src='/image/logo.svg' alt='Логотип сайту' width={263} height={148}/>
          </Link>
          <Link href='tel:00000000'>
            <Image src='/image/phone.svg' alt='Кнопка телефона' width={69} height={69}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header