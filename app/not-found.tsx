import type { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <main className={"not-found"}>
      <h1>Not found</h1>
      <p>Unfortunately, the page is not found</p>
      <Link href={"/"}>Back to the home page {"->"} </Link>
    </main>
  );
};

export default NotFound;
