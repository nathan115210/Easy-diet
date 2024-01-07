import type { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <main className={"not-found"}>
      <h1>meal not found</h1>
      <Link href={"/meals"}>Back to the meals page {"->"} </Link>
    </main>
  );
};

export default NotFound;
