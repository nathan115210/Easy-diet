import type { FC } from "react";
import styles from "./styles/grid.module.css";
import Link from "next/link";
import Image from "next/image";

export interface GridItemProps {
  image: string;
  title: string;
  creator: string;
  summary: string;
  slug: string;
}

const GridItem: FC<GridItemProps> = ({
  image,
  creator,
  title,
  summary,
  slug,
}) => {
  return (
    <article className={styles.grid}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default GridItem;
