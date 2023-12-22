// 'use client'
// import Image from 'next/image';
// import React from 'react';
// // import Swiper from 'react-id-swiper';
// import { Swiper } from 'swiper/react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
// import styles from './Gallery.module.scss'

// const Gallery = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [photoIndex, setPhotoIndex] = React.useState(0);

  // const images = [
  //   {
  //     thumbnail: "/image/poltava/gallery/1.jpg",
  //     full: "/image/poltava/gallery/full/1.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/2.jpg",
  //     full: "/image/poltava/gallery/full/2.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/3.jpg",
  //     full: "/image/poltava/gallery/full/3.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/4.jpg",
  //     full: "/image/poltava/gallery/full/4.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/5.jpg",
  //     full: "/image/poltava/gallery/full/5.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/6.jpg",
  //     full: "/image/poltava/gallery/full/6.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/1.jpg",
  //     full: "/image/poltava/gallery/full/1.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/2.jpg",
  //     full: "/image/poltava/gallery/full/2.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/3.jpg",
  //     full: "/image/poltava/gallery/full/3.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/4.jpg",
  //     full: "/image/poltava/gallery/full/4.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/5.jpg",
  //     full: "/image/poltava/gallery/full/5.jpg"
  //   },
  //   {
  //     thumbnail: "/image/poltava/gallery/6.jpg",
  //     full: "/image/poltava/gallery/full/6.jpg"
  //   }
  //   // Добавьте остальные изображения здесь...
  // ];


//   const params = {
//     wrapperClass: `${styles.swiperWrapper} swiper-wrapper`,
//     slidesPerView: 6,
//     slidesPerColumn: 1, // Добавьте это свойство
//     spaceBetween: 30,
//     slidesPerGroup: 6,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   };


//   return (
//     <section>
//       <div className="container">
//         <h2 className={styles.title}>Галерея</h2>
        
//         <Swiper {...params}>
          
//           {images.map((image, index) => (
//             <div className={styles.slide} key={index} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
//               <Image className={styles.img} src={image.thumbnail} alt={`Slide ${index}`} width={300} height={200} priority/>
//             </div>
//           ))}
//         </Swiper>
//         <div className="swiper-button-next">Next</div>
//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex].full}
//             nextSrc={images[(photoIndex + 1) % images.length].full}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length].full}
//             onCloseRequest={() => setIsOpen(false)}
//             onMovePrevRequest={() =>
//               setPhotoIndex((photoIndex + images.length - 1) % images.length)
//             }
//             onMoveNextRequest={() =>
//               setPhotoIndex((photoIndex + 1) % images.length)
//             }
//           />
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// Import Swiper React components

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Gallery.module.scss'
// Import Swiper styles
import 'swiper/scss';
import Image from 'next/image';

import { useState } from 'react'; // Добавьте это
import Lightbox from 'react-image-lightbox'; // Добавьте это
import 'react-image-lightbox/style.css';

const images = [
  {
    thumbnail: "/image/poltava/gallery/1.jpg",
    full: "/image/poltava/gallery/full/1.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/2.jpg",
    full: "/image/poltava/gallery/full/2.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/3.jpg",
    full: "/image/poltava/gallery/full/3.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/4.jpg",
    full: "/image/poltava/gallery/full/4.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/5.jpg",
    full: "/image/poltava/gallery/full/5.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/6.jpg",
    full: "/image/poltava/gallery/full/6.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/1.jpg",
    full: "/image/poltava/gallery/full/1.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/2.jpg",
    full: "/image/poltava/gallery/full/2.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/3.jpg",
    full: "/image/poltava/gallery/full/3.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/4.jpg",
    full: "/image/poltava/gallery/full/4.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/5.jpg",
    full: "/image/poltava/gallery/full/5.jpg"
  },
  {
    thumbnail: "/image/poltava/gallery/6.jpg",
    full: "/image/poltava/gallery/full/6.jpg"
  }
  // Добавьте остальные изображения здесь...
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false); // Добавьте это
  const [photoIndex, setPhotoIndex] = useState(0); // Добавьте это

  return (
    <section>
      <div className="container">
        <Swiper
          className={styles.swiper}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide className={styles.slide} key={index} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}> {/* Добавьте обработчик onClick */}
              <Image className={styles.img} src={image.thumbnail} alt='' width={400} height={300} />
            </SwiperSlide>
          ))}
        </Swiper>
        {isOpen && ( // Добавьте это
          <Lightbox
            mainSrc={images[photoIndex].full}
            nextSrc={images[(photoIndex + 1) % images.length].full}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].full}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;

// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styles from './Gallery.module.scss'
// import 'swiper/scss';
// import Image from 'next/image';
// import { useState } from 'react';

// const images = [
//   {
//     thumbnail: "/image/poltava/gallery/1.jpg",
//     full: "/image/poltava/gallery/full/1.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/2.jpg",
//     full: "/image/poltava/gallery/full/2.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/3.jpg",
//     full: "/image/poltava/gallery/full/3.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/4.jpg",
//     full: "/image/poltava/gallery/full/4.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/5.jpg",
//     full: "/image/poltava/gallery/full/5.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/6.jpg",
//     full: "/image/poltava/gallery/full/6.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/1.jpg",
//     full: "/image/poltava/gallery/full/1.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/2.jpg",
//     full: "/image/poltava/gallery/full/2.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/3.jpg",
//     full: "/image/poltava/gallery/full/3.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/4.jpg",
//     full: "/image/poltava/gallery/full/4.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/5.jpg",
//     full: "/image/poltava/gallery/full/5.jpg"
//   },
//   {
//     thumbnail: "/image/poltava/gallery/6.jpg",
//     full: "/image/poltava/gallery/full/6.jpg"
//   }
//   // Добавьте остальные изображения здесь...
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openImage = (index: any) => {
//     setSelectedImage(index);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <section>
//       <div className="container">
//         <Swiper
//           className={styles.swiper}
//           spaceBetween={10}
//           slidesPerView={3}
//           onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide className={styles.slide} key={index} onClick={() => openImage(index)}>
//               <Image className={styles.img} src={image.thumbnail} alt='' width={400} height={300} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {selectedImage !== null && (
//           <div className={styles.overlay} onClick={closeImage}>
//             <div className={styles.modal}>
//               <Image src={images[selectedImage].full} alt='' width={800} height={600} />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;
