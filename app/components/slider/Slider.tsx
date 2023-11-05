
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
        slidesPerView={4}
        loop={true}
        className={styles.swiper}
      >
        {children}
      </Swiper>
      <div className={styles.btnNext}>&gt;</div>
    </div>
  )
}

export default Slider