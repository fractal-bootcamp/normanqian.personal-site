import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline" >Norman Qian</h1>
    <div >
      
      <ul>
        <li>
        <a 
            target="_blank"
            href="/about"
            rel="noreferrer"
          >
            About Page
          </a>
        </li>
        
        <li>
        <a
        target="_blank"
            href="https://github.com/elizasviel"
            rel="noreferrer"             
        >
          GitHub
          </a>
        </li>

        <li>
        <a
            target="_blank"
            href="https://linkedin.com/in/norman-qian"
            rel="noreferrer"
          >
            LinkedIn
        </a>
        </li>

        <li>
        <a
          target="_blank"
          href=""
          rel="noreferrer"
        >
            Projects
        </a>
        </li>

      </ul>
    </div>
    </div>
  );
}
