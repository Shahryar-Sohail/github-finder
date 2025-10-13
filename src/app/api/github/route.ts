import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const headers = {
    "User-Agent": "NextJS-App",
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  };

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search");

  if (!query)
    return NextResponse.json({ error: "Missing search" }, { status: 400 });

  try {
    const res = await fetch(`https://api.github.com/search/users?q=${query}`, { headers });

    if (!res.ok) {
      console.error("Search failed:", res.status);
      return NextResponse.json({ error: "GitHub API search failed" }, { status: res.status });
    }

    const data = await res.json();

    if (!data.items) {
      console.error("No items found");
      return NextResponse.json({ items: [] });
    }

    const detailedUsers = await Promise.all(
      data.items.map(async (user: any) => {
        try {
          const [detailsRes, followersRes, followingRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${user.login}`, { headers }),
            fetch(`https://api.github.com/users/${user.login}/followers`, { headers }),
            fetch(`https://api.github.com/users/${user.login}/following`, { headers }),
            fetch(`https://api.github.com/users/${user.login}/repos`, { headers }),
          ]);

          // Check if any failed before parsing
          if (!detailsRes.ok) throw new Error(`detailsRes failed ${detailsRes.status}`);
          if (!followersRes.ok) throw new Error(`followersRes failed ${followersRes.status}`);
          if (!followingRes.ok) throw new Error(`followingRes failed ${followingRes.status}`);
          if (!reposRes.ok) throw new Error(`reposRes failed ${reposRes.status}`);

          const [details, followers, following, repos] = await Promise.all([
            detailsRes.json(),
            followersRes.json(),
            followingRes.json(),
            reposRes.json(),
          ]);

          return {
            ...user,
            followersCount: details.followers,
            followingCount: details.following,
            reposCount: details.public_repos,
            followers,
            following,
            repos,
          };
        } catch (err) {
          console.error("Error fetching user details:", user.login, err);
          return { ...user, followersCount: 0, followingCount: 0, reposCount: 0 };
        }
      })
    );

    return NextResponse.json({ items: detailedUsers });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
