import Card from "@/components/Card";
import { Suspense } from "react";

export default async function Dashboard() {
  const response = await fetch("http://localhost:3000/api/test");
  const data = await response.json();

  console.log(data);
  return (
    <>
      <Suspense fallback={<div> card1 Loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div> card2 Loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div> card3 Loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div> card4 Loading...</div>}>
        <Card />
      </Suspense>
    </>
  );
}
