import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex flex-row gap-10">
        <nav>
          <div className="h-screen relative w-64 flex space-y-16 flex-col p-3 bg-yellow-500 ">
            <img
              className="size-fit rounded-md"
              src="Norman-Qian-220618-Raw-004.jpeg"
            ></img>
            <h1 className="text-black text-center text-4xl font-bold underline bg-yellow">
              Norman Qian
            </h1>
            <a target="_blank" href="/about" rel="noreferrer">
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white text-2xl font-bold rounded-full animate-spin">
                About Page
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/elizasviel"
              rel="noreferrer"
            >
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white text-2xl font-bold rounded-full animate-ping">
                GitHub
              </button>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/norman-qian"
              rel="noreferrer"
            >
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white text-2xl font-bold rounded-full animate-pulse">
                LinkedIn
              </button>
            </a>
            <a target="_blank" href="" rel="noreferrer">
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white text-2xl font-bold rounded-full ">
                Projects
              </button>
            </a>
          </div>
        </nav>

        <div className="card w-96 h-96 bg-emerald-200 shadow-xl hover:bg-emerald-700">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body"> Placeholder</div>
        </div>

        <div className="card w-96 h-96 bg-emerald-200 shadow-xl hover:bg-emerald-700">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body"> Placeholder</div>
        </div>

        <div className="card w-96 h-96 bg-emerald-200 shadow-xl hover:bg-emerald-700">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body"> Placeholder</div>
        </div>

        <div className="card w-96 h-96 bg-emerald-200 shadow-xl hover:bg-emerald-700">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body"> Placeholder</div>
        </div>
      </div>
    </>
  );
}
