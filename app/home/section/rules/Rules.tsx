import Title from '@/app/components/title/Title'
import styles from './Rules.module.scss'

const Rules = () => {
  return (
    <section className={styles.section} id='rules'>
      <div className="container">
        <Title title={'h2'}>Правила закладу</Title>
        <div className={styles.wrapper}>
          Тут будуть правила закладу
        </div>
      </div>
    </section>
  )
}

export default Rules