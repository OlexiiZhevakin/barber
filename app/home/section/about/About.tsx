import Image from 'next/image'
import styles from './About.module.scss'
import Button from '@/app/components/button/Button'

const About = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Image className={styles.img} src='/image/about.jpg' alt='Картинка про нас' width={480} height={700}/>
          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.title}>
                Про нас
              </h2>
              <div className={styles.description}>
                <p>
                  Хто такий Старий Голландець? Це той, хто завжди знає, що потрібно справжнім чоловікам.
                </p>
                <p>
                  Стильна стрижка, виконана професійними барберами – це лише вершина айсберга і видимий оточуючим результат. І тільки ти знаєш насправді, що провівши час у Старого Голландця, ти дійсно відпочив. Спокійна атмосфера і приємна музика, тільки чоловічі розмови за склянкою чудового віскі – те, що час від часу потрібно кожному чоловікові.
                </p>
                <p>
                  Двері нашого барбершопу «Old Dutch» відкриті з 2016 року, і ти завжди можеш знайти нас в Полтаві та Одесі.
                </p>
                <p>
                  Приходь, адже Старий Голландець уже чекає на тебе поспілкуватися і зігрітися якісним алкоголем, доки досвідчені майстри працюють над твоїм стильним образом.
                </p>
              </div>
            </div>
            <Button className={styles.btn} href='#'>
              Записатися
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About