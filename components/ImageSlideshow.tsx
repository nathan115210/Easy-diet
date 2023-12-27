"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles/imageSlideShow.module.css";

export type ImageSlideItemType = {
  image: StaticImageData;
  alt: string;
};

export interface ImageSlideshowProps {
  images: ImageSlideItemType[];
}

const ImageSlideshow: FC<ImageSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
