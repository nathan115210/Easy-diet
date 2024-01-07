import styles from "../../components/styles/mealsMainPage.module.css";
import Link from "next/link";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/meals";
import { MealItemProps } from "@/components/MealItem";
import { Suspense } from "react";
import LoadingMeals from "@/app/meals/LoadingMeals";

const Meals = async () => {
  const meals = (await getMeals()) as MealItemProps[];
  return <MealsGrid items={meals} />;
};

const MealsPage = async () => {
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
      <Suspense fallback={<LoadingMeals />}>
        <Meals />
      </Suspense>
    </>
  );
};

export default MealsPage;
