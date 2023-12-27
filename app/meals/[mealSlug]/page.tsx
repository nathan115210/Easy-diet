"use client";

import type { FC } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface MealDetailsPageProps {}

const MealDetailsPage: FC<MealDetailsPageProps> = (props) => {
  const params = useParams();
  return (
    <div>
      <h1>MealPage - {params.slug}</h1>
      <h4>
        <Link href={"/meals"}>Exploring more meals</Link>
      </h4>
    </div>
  );
};

export default MealDetailsPage;
