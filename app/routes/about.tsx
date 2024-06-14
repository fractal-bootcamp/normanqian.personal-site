import { useState } from "react";

const Ball = () => {
  // let rect = document.getElementById("ball").getBoundingClientRect();

  let xposition = 0;
  let yposition = 0;

  return (
    <div>
      <img
        className="clip-path: circle(40%);"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      ></img>
      <button
        id="ball"
        className="bg-emerald-200 rounded-full size-52 relative"
        onKeyDown={(event) => {
          if (event.key == "ArrowLeft") {
            xposition += 20;
            document.getElementById("ball").style.right = `${xposition}px`;
          } else if (event.key == "ArrowRight") {
            xposition -= 20;
            document.getElementById("ball").style.right = `${xposition}px`;
          } else if (event.key == "ArrowDown") {
            yposition += 20;
            document.getElementById("ball").style.top = `${yposition}px`;
          } else if (event.key == "ArrowUp") {
            yposition -= 20;
            document.getElementById("ball").style.top = `${yposition}px`;
          }
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default function About() {
  // let rect = document.getElementById("ball").getBoundingClientRect();

  return (
    <div className="hero min-h-screen bg-base-200">
      <Ball />
    </div>
  );
}

/*
      <div
        className="bg-emerald-200 rounded-full size-52 animate-bounce"
        onKeyDown={() => {
          console.log("pressed!");
        }}
      >
      </div>
      var(--name, value)

      class="[--scroll-offset:56px] 
      (magnifying glass)
*/
