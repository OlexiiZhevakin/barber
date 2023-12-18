import Image from 'next/image'
import styles from './About.module.scss'
import Button from '@/app/[locale]/components/button/Button'
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  return (
    <section className={styles.section} id='about'>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <p>{t('text1')}</p>
            <p>{t('text2')}</p>
            <p>{t('text3')}</p>
            <p>{t('text4')}</p>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image className={styles.icon} src="/image/icons/Scissors.svg" alt='Іконка ножиць' width={40} height={40} />
              <span className={styles.num}>
                4
              </span>
              <p className={styles.text}>{t('text5')}</p>
            </div>
            <div className={styles.item}>
              <Image className={styles.icon} src="/image/icons/Armchair.svg" alt='Іконка ножиць' width={40} height={40} />
              <span className={styles.num}>
                10 876
              </span>
              <p className={styles.text}>{t('text6')}</p>
            </div>
            <div className={styles.item}>
              <Image className={styles.icon} src="/image/icons/CallBell.svg" alt='Іконка ножиць' width={40} height={40} />
              <span className={styles.num}>
                46073
              </span>
              <p className={styles.text}>{t('text7')}</p>
            </div>
          </div>
          <Image className={styles.img} src='/image/cherkasy/about.jpg' alt='Картинка про нас' width={370} height={410} />
        </div>
        <div className={styles.btn}>
          <Button href='https://b131271.alteg.io/select-city/520/select-branch?referrer=https:%2F%2Fold-dutch.com.ua%2F&o='>
            {t('btn')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About