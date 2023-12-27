import type { FC } from "react";
import GridItem, { GridItemProps } from "@/components/GridItem";

interface GridProps {
  items: GridItemProps[];
}

const Grid: FC<GridProps> = ({ items }) => {
  return items.length
    ? items.map((item, index) => {
        const { image, title, creator, summary, slug } = item;
        return (
          <li key={index}>
            <GridItem
              image={image}
              title={title}
              creator={creator}
              summary={summary}
              slug={slug}
            />
          </li>
        );
      })
    : null;
};

export default Grid;
