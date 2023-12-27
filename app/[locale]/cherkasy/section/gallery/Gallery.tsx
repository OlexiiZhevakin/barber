"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.scss';
import Title from '@/app/[locale]/components/title/Title';

type Props = {
  title: string
}

const Gallery = ({title}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      thumbnail: "/image/cherkasy/gallery/1.jpg",
      full: "/image/cherkasy/gallery/full/1.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/2.jpg",
      full: "/image/cherkasy/gallery/full/2.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/3.jpg",
      full: "/image/cherkasy/gallery/full/3.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/4.jpg",
      full: "/image/cherkasy/gallery/full/4.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/5.jpg",
      full: "/image/cherkasy/gallery/full/5.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/6.jpg",
      full: "/image/cherkasy/gallery/full/6.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/7.jpg",
      full: "/image/cherkasy/gallery/full/7.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/8.jpg",
      full: "/image/cherkasy/gallery/full/8.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/9.jpg",
      full: "/image/cherkasy/gallery/full/9.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/10.jpg",
      full: "/image/cherkasy/gallery/full/10.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/11.jpg",
      full: "/image/cherkasy/gallery/full/11.jpg"
    },
    {
      thumbnail: "/image/cherkasy/gallery/12.jpg",
      full: "/image/cherkasy/gallery/full/12.jpg"
    }
    // Добавьте остальные изображения здесь...
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <Title title={'h2'}>{title}</Title>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image.full)}>
            <Image className={styles.img} src={image.thumbnail} width={300} height={200} alt='Photo' />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <Image src={selectedImage} width={800} height={800} alt='Photo' priority />
        </div>
      )}
    </section>
  );
};

export default Gallery;
