"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image.full)}>
            <Image className={styles.img} src={image.thumbnail} width={400} height={400} alt='Photo' />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <Image src={selectedImage} width={800} height={800} alt='Photo' />
        </div>
      )}
    </section>
  );
};

export default Gallery;
