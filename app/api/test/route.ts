import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  return NextResponse.json({ data: "응답 완료!" });
}
