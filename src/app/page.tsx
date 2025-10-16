'use client';
import { useState } from "react";
import Image from "next/image";
import githubLogo from "../../public/github-mark.png";
import "../app/globals.css";
import Particles from '../components/Particles';
import Link from "next/link";

export default function GitHubFinder() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    const res = await fetch(`/api/github?search=${query}`);
    const data = await res.json();
    setResult(data);

    console.log("Followers Count:", data.items[0]?.followersCount);
    console.log("Followers List:", data.items[0]?.followers);   // ✅ full followers array
    console.log("Following List:", data.items[0]?.following);
    console.log("Repos:", data.items[0]?.repos);
    if (data.items?.length === 0) {
      alert("❌ No user found with that username.");
    }
    setLoading(false);
    setQuery("");

  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ff0000', '#ffffff']}
          particleCount={19000}
          particleSpread={20}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}

        />

      </div>

      <div className="relative z-10 min-h-screen p-10 text-center">
        <div className="flex justify-around flex-wrap items-center gap-5">
          <div className="md:w-1/6 md:block hidden">
            <Image src={githubLogo} className="bg-white rounded-4xl animated-logo" alt="GitHub Logo" width={50} height={50} />
          </div>
          <div className="md:w-1/6">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 gradient-text animated-text">GitHub Finder</h1>
          </div>
          <div className="flex justify-between gap-3 md:w-1/6">
            <h1 className="text-3xl md:text-2xl font-bold mb-5 gradient-text animated-text ">Developed By
            </h1>
            <Link href="https://github.com/Shahryar-Sohail" target="_blank"> <Image src={githubLogo} className="bg-white rounded-4xl animated-logo border" alt="GitHub Logo" width={50} height={30} /></Link>
          </div>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="searchInput"
          placeholder="User Name..."
          className="border p-3 mt-10 md:w-1/3 text-lg text-white placeholder-gray-300"
        />
        <button
          onClick={handleSearch}
          className="ml-3 bg-blue-600 text-white px-5 py-2 rounded cursor-pointer"
        >
          Search
        </button>
        {
          loading &&
          <div>
            <span className="loading loading-spinner text-success text-[100px] m-10"></span>
          </div>
        }
        <div className="mt-10 h-[60vh] overflow-y-scroll">
          {result && result.items?.map((u: any) => (

            <div key={u.id} className="w-full md:w-5/6 mx-auto my-5 ">
              <div className="card card-side shadow-xl flex flex-col lg:flex-row justify-center px-4 py-2 bg-white/80">

                <div className="relative w-5/6 max-w-[300px] h-48 sm:h-64 m-auto overflow-hidden rounded-xl">
                  <Image
                    src={u.avatar_url}
                    alt="Profile"
                    fill
                    className="object-contain"
                  />

                </div>

                <div className="card-body">
                  <div className="flex flex-wrap gap-3">
                    <h2 className="card-title w-full">{u.login}</h2> 
                    <button className="btn btn-soft btn-info  justify-start">
                      <a href={u.html_url} target="_blank">Profile Link</a>
                    </button>
                    <button className="btn btn-soft btn-accent  justify-start">
                      Followers : {u.followersCount}
                    </button>
                    <button className="btn btn-soft btn-primary  justify-start">
                      Follwing : {u.followingCount}
                    </button>
                    <button className="btn btn-soft btn-warning  justify-start">
                      Repos : {u.reposCount}
                    </button>

                  </div>

                  <div className="flex flex-col md:flex-row justify-center  gap-3 ">


                    {/* Followers  */}
                    <ul className="list bg-base-100  rounded-box shadow-md h-72  md:w-1/2 w-full overflow-y-scroll  dark:text-white">

                      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Followers: {u.followersCount}</li>

                      {u.followers?.map((follower: any) => (
                        <li key={follower.id}>
                          <div className="w-full flex items-center gap-4 px-4 my-2">
                            <a href={follower.html_url} target="_blank" className="hover:scale-120 transition-transform ">
                              <img className="size-10 rounded-box " src={follower.avatar_url} />
                            </a>

                            <div>
                              <a href={follower.html_url} target="_blank" className=" underline hover:text-blue-700">{follower.login}</a>
                            </div>

                          </div>
                        </li>
                      ))}

                    </ul>

                    {/* following  */}
                    <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full  overflow-y-scroll dark:text-white">

                      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwing: {u.followingCount}</li>

                      {u.following?.map((follower: any) => (
                        <li key={follower.id}>
                          <div className="w-full flex items-center gap-4 px-4 my-2">
                            <a href={follower.html_url} target="_blank" className="hover:scale-120 transition-transform">
                              <img className="size-10 rounded-box" src={follower.avatar_url} />
                            </a>
                            <div><a href={follower.html_url} target="_blank" className="underline hover:text-blue-700">{follower.login}</a></div>
                          </div>
                        </li>
                      ))}


                    </ul>

                    {/* repos  */}
                    <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full overflow-y-scroll dark:text-white">

                      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Repos: {u.reposCount}</li>

                      {u.repos?.map((repo: any) => (
                        <li key={repo.id}>
                          <div className="w-full flex items-center justify-between gap-4 px-4 my-2">
                            <a href={repo.html_url} target="_blank" className="underline hover:text-blue-700">{repo.name}</a>
                            <div>
                              <button className="btn btn-soft btn-success">{repo.visibility}</button>
                            </div>
                          </div>
                        </li>
                      ))
                      }



                    </ul>
                  </div>


                </div>


              </div>
            </div>

          ))}
        </div>
      </div>


    </div>
  );
}
