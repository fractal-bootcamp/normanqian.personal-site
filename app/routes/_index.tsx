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
      <div className="flex flex-row">
        <nav>
          <div className="h-screen relative w-64 flex space-y-16 flex-col p-3 bg-yellow-500 ">
            <img
              className="size-fit"
              src="Norman-Qian-220618-Raw-004.jpeg"
            ></img>
            <h1 className="text-center text-3xl font-bold underline bg-yellow">
              Norman Qian
            </h1>
            <a target="_blank" href="/about" rel="noreferrer">
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded-full">
                About Page
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/elizasviel"
              rel="noreferrer"
            >
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded-full">
                GitHub
              </button>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/norman-qian"
              rel="noreferrer"
            >
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded-full">
                LinkedIn
              </button>
            </a>
            <a target="_blank" href="" rel="noreferrer">
              <button className="size-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold rounded-full">
                Projects
              </button>
            </a>
          </div>
        </nav>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
}
