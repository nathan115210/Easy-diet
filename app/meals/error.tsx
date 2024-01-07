"use client";

import Link from "next/link";

export default function LoadingMealsError() {
  return (
    <main className={"error"}>
      <h1>Loading meals failed</h1>
      <button onClick={() => location.reload()}>Try again</button>
      <p>Or</p>
      <Link href={"/"}>Back to the home page {"->"} </Link>
    </main>
  );
}
