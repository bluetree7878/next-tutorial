"use client";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Page({ params }: { params: Params }) {
  const { id } = use(params);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/test/1234", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "test name", email: "test email" }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      다이나믹 라우트 페이지: {id}
      <form onSubmit={handleSubmit}>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
