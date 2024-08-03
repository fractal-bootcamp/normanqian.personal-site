import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const [project, setProject] = useState("");
  return (

  );
}

/*
      <button
        onClick={() =>
          brightness < 3 ? setBrightness(brightness + 1) : setBrightness(0)
        }
      >
        Increase brightness
      </button>
*/

const BlackboardLG = () => {
  return (
  );
};

const BlackboardSM = () => {
  return (
  );
};
