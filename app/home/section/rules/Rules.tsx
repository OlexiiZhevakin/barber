import Title from '@/app/components/title/Title'
import styles from './Rules.module.scss'
import Button from '@/app/components/button/Button'

const Rules = () => {
  return (
    <section className={styles.section} id='rules'>
      <div className="container">
        <Title title={'h2'}>Правила закладу</Title>
        <div className={styles.wrapper}>
          Тут будуть правила закладу
        </div>
        <div className={styles.btn}>
          <Button href='#'>Записатися</Button>
        </div>
      </div>
    </section>
  )
}

export default Rules