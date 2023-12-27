import styles from "../components/styles/homePage.module.css";
import Link from "next/link";
import ImageSlideshow, {
  ImageSlideItemType,
} from "@/components/ImageSlideshow";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const homePageImages: ImageSlideItemType[] = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow images={homePageImages} />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>EasyDiet food from Foodies</h1>
            <p>Taste and share the food from all over the world</p>
          </div>
          <div className={styles.cta}>
            <Link href={"/community"}>Join Community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            EasyDiet is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            EasyDiet is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why EasyDiet?</h2>
          <p>
            EasyDiet is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            EasyDiet is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
