import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

//
//className="rounded-full"

export const meta: MetaFunction = () => {
  return [{ title: "Norman Qian" }, { name: "Personal Site" }];
};

const Square = () => {
  return (
    <motion.div
      className="bg-rose-200 "
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <img src="Norman-Qian-220618-Raw-004.jpeg" className="px-5 py-5"></img>
    </motion.div>
  );
};

export default function Index() {
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
            Suspendisse eleifend neque sit amet felis fermentum, sed viverra
            enim tempus.
          </p>
        </div>
      </div>

      <div className="display: flex">
        <div className="basis-1/2 bg-gray-200">
          abcajdnfsvlogaquiehgfjaenrgorjeang
        </div>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 basis-1/2">
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      </div>
    </div>
  );
}
