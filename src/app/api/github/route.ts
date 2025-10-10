import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search");

  if (!query) return NextResponse.json({ error: "Missing search" }, { status: 400 });

  const res = await fetch(`https://api.github.com/search/users?q=${query}`, {
    headers: { "User-Agent": "NextJS-App" },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
