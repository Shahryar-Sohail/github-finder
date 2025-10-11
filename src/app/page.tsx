'use client';
import { useState } from "react";
import Image from "next/image";

export default function GitHubFinder() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    const res = await fetch(`/api/github?search=${query}`);
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-5">GitHub Finder</h1>

      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter username..."
        className="border p-3 w-1/3 text-lg"
      />
      <button
        onClick={handleSearch}
        className="ml-3 bg-blue-600 text-white px-5 py-2 rounded"
      >
        Search
      </button>
      {
        loading &&
        <div>
          <span className="loading loading-spinner text-primary text-9xl"></span>
        </div>
      }
      <div className="mt-10">
        {result && result.items?.map((u: any) => (

          <div key={u.id} className="w-5/6 mx-auto">
            <div className="card card-side bg-base-100 shadow-sm border flex flex-col lg:flex-row justify-center px-4 py-2">

              <div className="relative w-5/6 max-w-[300px] h-48 sm:h-64 m-auto overflow-hidden rounded-xl">
                <Image
                  src={u.avatar_url}
                  alt="Profile"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="card-body">
                <div className="flex flex-wrap gap-3">
                <h2 className="card-title ">{u.login}</h2>
                  <button className="btn btn-soft btn-info  justify-start">
                    <a href={u.html_url} target="_blank">Profile Link</a>
                  </button>
                  <button className="btn btn-soft btn-accent  justify-start">
                    Followers : 23
                  </button>
                  <button className="btn btn-soft btn-primary  justify-start">
                    Follwing : 23
                  </button>
                  <button className="btn btn-soft btn-warning  justify-start">
                    Repos : 23
                  </button>

                </div>

                <div className="flex flex-col md:flex-row justify-center  gap-3 ">

                  <ul className="list bg-base-100 rounded-box shadow-md h-72  md:w-1/2 w-full  overflow-y-scroll">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwers</li>

                    <li className="border">
                      <div className="w-full border flex items-center justify-evenly gap-4">
                        <a href=" https://github.com/DioLupa " target="_blank" className="hover:scale-120 transition-transform">
                          <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                        </a>
                        <div><a href="https://github.com/DioLupa" target="_blank" className="underline hover:text-blue-700">Dio Lupa</a></div>
                        <div>Followers: 10</div>
                      </div>
                    </li>


                  </ul>

                  <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full  overflow-y-scroll">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwing</li>

                    <li className="border">
                      <div className="w-full border flex items-center justify-evenly gap-4">
                        <a href=" https://github.com/DioLupa " target="_blank" className="hover:scale-120 transition-transform">
                          <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                        </a>
                        <div><a href="https://github.com/DioLupa" target="_blank" className="underline hover:text-blue-700">Dio Lupa</a></div>
                        <div>Followers: 10</div>
                      </div>
                    </li>


                  </ul>


                  <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full  overflow-y-scroll">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Repos</li>

                    <li className="border">
                      <div className="w-full border flex items-center justify-evenly gap-4">
                        <div>REPO Name</div>
                        <div><button className="btn btn-soft btn-success">Private</button></div>
                      </div>
                    </li>
                  </ul>
                </div>


              </div>


            </div>
          </div>

        ))}
        <div className="w-5/6 mx-auto">
          <div className="card card-side bg-base-100 shadow-sm border flex flex-col lg:flex-row justify-center px-4 py-2">

            <div className="relative w-5/6 max-w-[300px] h-48 sm:h-64 m-auto overflow-hidden rounded-xl">
              <Image
                src="https://avatars.githubusercontent.com/u/144619587?v=4"
                alt="Profile"
                fill
                className="object-cover"
              />

            </div>

            <div className="card-body">
              <div className="flex flex-wrap gap-3">
                <h2 className="card-title ">Shahryar Sohail</h2>
                <button className="btn btn-soft btn-info  justify-start">
                  <a href="https://github.com/shahryar-sohail" target="_blank">Profile Link</a>
                </button>
                <button className="btn btn-soft btn-accent  justify-start">
                  Followers : 23
                </button>
                <button className="btn btn-soft btn-primary  justify-start">
                  Follwing : 23
                </button>
                <button className="btn btn-soft btn-warning  justify-start">
                  Repos : 23
                </button>

              </div>

              <div className="flex flex-col md:flex-row justify-center  gap-3 ">

                <ul className="list bg-base-100 rounded-box shadow-md h-72  md:w-1/2 w-full  overflow-y-scroll">

                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwers</li>

                  <li className="border">
                    <div className="w-full border flex items-center justify-evenly gap-4">
                      <a href=" https://github.com/DioLupa " target="_blank" className="hover:scale-120 transition-transform">
                        <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                      </a>
                      <div><a href="https://github.com/DioLupa" target="_blank" className="underline hover:text-blue-700">Dio Lupa</a></div>
                      <div>Followers: 10</div>
                    </div>
                  </li>


                </ul>

                <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full  overflow-y-scroll">

                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwing</li>

                  <li className="border">
                    <div className="w-full border flex items-center justify-evenly gap-4">
                      <a href=" https://github.com/DioLupa " target="_blank" className="hover:scale-120 transition-transform">
                        <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                      </a>
                      <div><a href="https://github.com/DioLupa" target="_blank" className="underline hover:text-blue-700">Dio Lupa</a></div>
                      <div>Followers: 10</div>
                    </div>
                  </li>


                </ul>


                <ul className="list bg-base-100 rounded-box shadow-md h-72 md:w-1/2 w-full  overflow-y-scroll">

                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Repos</li>

                  <li className="border">
                    <div className="w-full border flex items-center justify-evenly gap-4">
                      <div>REPO Name</div>
                      <div><button className="btn btn-soft btn-success">Private</button></div>
                    </div>
                  </li>
                </ul>
              </div>


            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
