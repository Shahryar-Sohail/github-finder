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

          <div key={u.id} className="card card-side bg-base-100 shadow-sm">
            <Image
              src={u.avatar_url}
              alt="Movie"
              width={100}
              height={100}
            />
            <div className="card-body">
              <h2 className="card-title">{u.login}</h2>
              <a href={u.html_url} target="_blank">Profile Link</a>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>

        ))}
        <div className="w-4/6 mx-auto">
          <div className="card card-side bg-base-100 shadow-sm">

         <div className="relative w-full max-w-[400px] h-96 sm:h-72 mx-auto border overflow-hidden rounded-xl">
  <Image
    src="https://avatars.githubusercontent.com/u/144619587?v=4"
    alt="Profile"
    fill
    className="object-cover"
  />
</div>


            <div className="card-body">
              <h2 className="card-title border">Shahryar Sohail</h2>
              <div className="flex">
                <button className="btn btn-soft btn-info  justify-start">
                  <a href="https://github.com/shahryar-sohail" target="_blank">Profile Link</a>
                </button>
              </div>

              <div className="flex justify-center gap-3">

                <ul className="list bg-base-100 rounded-box shadow-md h-1/2 overflow-scroll">

                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Followers</li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div>
                      <div>Dio Lupa</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                    <div>
                      <div>Ellie Beilish</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                    <div>
                      <div>Sabrino Gardener</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                </ul>

                <ul className="list bg-base-100 rounded-box shadow-md  h-1/2 overflow-scroll">

                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Follwing</li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div>
                      <div>Dio Lupa</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                    <div>
                      <div>Ellie Beilish</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                  <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                    <div>
                      <div>Sabrino Gardener</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                  </li>

                </ul>

              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
