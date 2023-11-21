import Title from '@/app/components/title/Title'
import styles from './Services.module.scss'
import { priceData } from './data'
import Button from '@/app/components/button/Button'
import Image from 'next/image'

const Services = () => {
  return (
    <section className={styles.section} id='services'>
      <div className="container">
        <Title title={'h2'}>Послуги</Title>
        <div className={styles.wrapper}>
            <div className={styles.certificate}>
              <Image src='/image/service/card-1.jpg' alt='Фото подарункової карти' width={400} height={280}/>
            <Image src='/image/service/card-2.jpg' alt='Фото подарункової карти' width={400} height={280} />
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
          <Button href='https://b131271.alteg.io/select-city/520/select-branch?referrer=https:%2F%2Fold-dutch.com.ua%2F&o='>
            Записатися
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services