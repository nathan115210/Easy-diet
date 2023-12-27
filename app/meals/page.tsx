import type { FC } from "react";
import styles from "../../components/styles/mealsMainPage.module.css";
import Link from "next/link";
import Grid from "@/components/Grid";

interface MealsPageProps {}

const MealsPage: FC<MealsPageProps> = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cot it by yourself. It is easy and
          fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share your own recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Grid items={[]} />
      </main>
    </>
  );
};

export default MealsPage;
