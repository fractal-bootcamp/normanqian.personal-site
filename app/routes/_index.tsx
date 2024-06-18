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
      <img src={displayData} className="w-full h-full px-3 py-3"></img>
    </div>
  );
};

const Square = ({ img, handleHover, text }) => {
  return (
    <motion.div
      onMouseOver={() => handleHover()}
      className="bg-rose-200 aspect-square content-center hover:bg-rose-400 "
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <p className="text-center text-3xl hover:text-5xl">{text}</p>
    </motion.div>
  );
};

export default function Index() {
  const [displayData, setDisplayData] = useState("");
  return (
    <div className="overscroll-none ">
      <div className="bg-gray-600 display: flex w-full aspect-[12/3] ">
        <img src="Norman-Qian-220618-Raw-004.jpeg" className="px-3 py-3"></img>

        <div className="bg-gray-500  content-center w-full">
          <p className="text-6xl px-10">Norman Qian</p>
          <br />
          <p className="px-10">
            Bootcamp student. Dreaming about React. Thinking about state,
            components, and page rendering
          </p>
        </div>
      </div>

      <div className="display: flex bg-gray-400 px-3 py-3">
        <Display displayData={displayData}></Display>

        <div className="grid gap-4 grid-cols-2 grid-rows-2 w-full lg:basis-1/2 px-3 py-3">
          <Square
            handleHover={() =>
              setDisplayData("./iloveimg-resized/BigTacToe.png")
            }
            text={"Tic Tac Toe"}
          ></Square>

          <Square
            handleHover={() => setDisplayData("./iloveimg-resized/banana.jpeg")}
            text={"Survey App"}
          ></Square>
          <Square
            handleHover={() => setDisplayData("./iloveimg-resized/orange.jpeg")}
            text={"Project 3"}
          ></Square>
          <Square
            handleHover={() =>
              setDisplayData("./iloveimg-resized/watermelon.jpeg")
            }
            text={"Project 4"}
          ></Square>
        </div>
      </div>
    </div>
  );
}
