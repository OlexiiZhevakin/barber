
import styles from './Head.module.scss'
import Button from '@/app/components/button/Button'

const Head = () => {
  return (
    <section className={styles.section} id='home'>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Персоналізований сервіс та індивідуальний стиль
          </h1>
          <Button href='#'>записатися</Button>
        </div>
      </div>
    </section>
  )
}

export default Head