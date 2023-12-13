'use client'
import Title from '@/app/components/title/Title'
import styles from './Masters.module.scss'
import Slider from '@/app/components/slider/Slider'
import { SwiperSlide } from 'swiper/react';
import { masterData } from './data'
import Image from 'next/image'
import Button from '@/app/components/button/Button'

const Masters = () => {
  return (
    <section className={styles.section} id='masters'>
      <div className="container">
        <div className={styles.wrapper}>
          <Title title={'h2'}>Майстри</Title>
          <Slider>
            <ul className={styles.list}>
              {masterData.map(slide => (
                <li key={slide.id}>
                  <SwiperSlide key={slide.id}>
                    <div className={styles.item}>
                      <Image className={styles.image} src={slide.image} alt={slide.name} width={268} height={398} priority />
                      <div className={styles.content}>
                        <p className={styles.author}>{slide.name}</p>
                        <Button href='https://b131271.alteg.io/select-city/520/select-branch?referrer=https:%2F%2Fold-dutch.com.ua%2F&o='>Записатися</Button>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              ))}
            </ul>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Masters