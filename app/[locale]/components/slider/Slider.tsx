
import styles from './Slider.module.scss'
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

type Props = {
  children: React.ReactNode
}

const Slider = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.btnNext}`
        }}
        slidesPerView={1}
        loop={true}
        className={styles.swiper}
        breakpoints={{
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4,
          },
          // when window width is >= 1024px and < 1280px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 768px and < 1024px
          768: {
            slidesPerView: 2,
          },
          // when window width is < 768px
          767: {
            slidesPerView: 1,
          },
        }}
      >
        {children}
      </Swiper>
      <div className={styles.btnNext}>&gt;</div>
    </div>
  )
}

export default Slider