
import Image from 'next/image'
import styles from './Head.module.scss'
import Button from '@/app/[locale]/components/button/Button'
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('Head');
  return (
    <section className={styles.section} id='home'>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('title')}</h1>
            <Button href='https://b131271.alteg.io/select-city/520/select-branch?referrer=https:%2F%2Fold-dutch.com.ua%2F&o='>{t('btn')}</Button>
          </div>
          <div className={styles.image}>
            <Image src="/image/header-logo.svg" alt='Логотип барбершопу Old Dutch' width={434} height={480} priority />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Head