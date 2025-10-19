import { NextResponse } from "next/server";

export async function GET() {
    const content = `
User-agent: *
Allow: /

Sitemap: https://github-finder-olive-iota.vercel.app/sitemap.xml
  `.trim();

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
