import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { useState } from "react";

//
//className="rounded-full"

export const meta: MetaFunction = () => {
  return [{ title: "Norman Qian" }, { name: "Personal Site" }];
};

const Display = ({ displayData }) => {
  return (
    <div className="hidden lg:block basis-1/2">
      <img src={displayData}></img>
    </div>
  );
};

const Square = ({ img, handleHover, text }) => {
  return (
    <motion.div
      onMouseOver={() => handleHover()}
      className="bg-rose-200"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      {text}
    </motion.div>
  );
};

export default function Index() {
  const [displayData, setDisplayData] = useState("");
  return (
    <div className="overscroll-none ">
      <div className="bg-black display: flex w-full aspect-[12/3] ">
        <img src="Norman-Qian-220618-Raw-004.jpeg" className="px-3 py-3"></img>

        <div className="bg-gray-500  content-center w-full">
          <p className="text-6xl px-10">Norman Qian</p>
          <br />
          <p className="px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum quam vel porta commodo. Donec lobortis purus in leo
            posuere, vitae venenatis orci finibus. Fusce a est lorem. Ut
            lacinia, orci eu rutrum volutpat, lectus augue euismod sem, eu
            elementum ligula nisl in odio. Morbi eget facilisis erat.
          </p>
        </div>
      </div>

      <div className="display: flex bg-gray-200">
        <Display displayData={displayData}></Display>

        <div className="grid gap-4 grid-cols-2 grid-rows-2 basis-1/2">
          <Square
            handleHover={() =>
              setDisplayData("Norman-Qian-220618-Raw-004.jpeg")
            }
            text={"FizzBuzz"}
          ></Square>

          <Square
            handleHover={() => setDisplayData("banana.jpeg")}
            text={"Survey App"}
          ></Square>
          <Square
            handleHover={() => setDisplayData("orange.jpeg")}
            text={"Flappy Birds"}
          ></Square>
          <Square
            handleHover={() => setDisplayData("watermelon.jpeg")}
            text={"StarDew Valley"}
          ></Square>
        </div>
      </div>
    </div>
  );
}
