import type { FC } from "react";
import MealItem, { MealItemProps } from "@/components/MealItem";
import styles from "./styles/grid.module.css";

interface MealsGridProps {
  items: MealItemProps[];
}

const MealsGrid: FC<MealsGridProps> = ({ items }) => {
  return items.length ? (
    <main className={styles.main}>
      <ul className={styles.grid}>
        {items.map((item, index) => {
          const { image, title, creator, summary, slug } = item;
          return (
            <li key={index}>
              <MealItem
                image={image}
                title={title}
                creator={creator}
                summary={summary}
                slug={slug}
              />
            </li>
          );
        })}
      </ul>
    </main>
  ) : null;
};

export default MealsGrid;
