import Title from '@/app/components/title/Title'
import styles from './Services.module.scss'
import { priceData } from './data'
import Button from '@/app/components/button/Button'

const Services = () => {
  return (
    <section className={styles.section} id='services'>
      <div className="container">
        <Title title={'h2'}>Послуги</Title>
        <div className={styles.wrapper}>
            <div className={styles.certificate}>
              Тут будет сертификат
            </div>
            <ul className={styles.list}>
              {priceData.map(item => (
                <li className={styles.item} key={item.id}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.dots}></span>
                  <span className={styles.price}>{`від ${item.price}₴`}</span>
                </li>
              ))}
            </ul>
          
        </div>
        <div className={styles.btn}>
          <Button href='#'>
            Записатися
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services