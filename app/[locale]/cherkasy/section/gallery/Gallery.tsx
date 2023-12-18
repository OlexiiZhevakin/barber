import styles from './Gallery.module.scss'
import { useTranslations } from 'next-intl';

const Gallery = () => {
  const t = useTranslations('Gallery');
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
      </div>
    </section>
  )
}

export default Gallery