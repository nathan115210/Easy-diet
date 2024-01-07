import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { MealItemProps } from "@/components/MealItem";
import Image from "next/image";
import { notFound } from "next/navigation";

const MealDetailsPage = ({ params }: { params: { mealSlug: string } }) => {
  const meal = getMeal(params.mealSlug) as MealItemProps;

  if (!meal) {
    notFound();
  }
  const { title, summary, slug, creator, creator_email, image, instructions } =
    meal;
  const mealIntro = instructions?.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          {<Image src={image} alt={slug} fill />}
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          {creator_email && (
            <p className={styles.creator}>
              bt <a href={`mailto:${creator_email}`}>{creator}</a>
            </p>
          )}
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      {mealIntro && (
        <main>
          <p
            className={styles.instructions}
            dangerouslySetInnerHTML={{ __html: mealIntro }}
          ></p>
        </main>
      )}
    </>
  );
};

export default MealDetailsPage;
