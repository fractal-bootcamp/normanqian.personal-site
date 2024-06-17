import type { MetaFunction } from "@remix-run/node";

//
//className="rounded-full"

export const meta: MetaFunction = () => {
  return [{ title: "Norman Qian" }, { name: "Personal Site" }];
};

export default function Index() {
  return (
    <div>
      <div className="bg-black display: flex w-full aspect-[12/3]">
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
            enim tempus. Vivamus vestibulum felis vel posuere pulvinar. Mauris
            vestibulum ipsum sit amet sapien dapibus, id finibus arcu sagittis.
            Nullam sagittis purus ut faucibus tristique. Curabitur velit velit,
            imperdiet eleifend metus sit amet, hendrerit lacinia
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-3">
        <div className="bg-emerald-700 aspect-square hover:animate-spin">
          Norman Qian
        </div>
        <div className="bg-emerald-700 aspect-square">Norman Qian</div>
        <div className="bg-emerald-700 aspect-square">Norman Qian</div>
        <div className="bg-emerald-700 aspect-square">Norman Qian</div>
      </div>
      <div className="display: flex">
        <div className="bg-indigo-500 aspect-square">Norman Qian</div>
        <div className="bg-indigo-500 aspect-square">Norman Qian</div>
        <div className="bg-indigo-500 aspect-square">Norman Qian</div>
        <div className="bg-indigo-500 aspect-square">Norman Qian</div>
      </div>
      <div className="display: inline-block">
        <div className="bg-gray-500 aspect-square">Norman Qian</div>
        <div className="bg-gray-500 aspect-square">Norman Qian</div>
        <div className="bg-gray-500 aspect-square">Norman Qian</div>
        <div className="bg-gray-500 aspect-square">Norman Qian</div>
      </div>
      <div className="display: table">
        <div className="bg-amber-500 aspect-square">Norman Qian</div>
        <div className="bg-amber-500 aspect-square">Norman Qian</div>
        <div className="bg-amber-500 aspect-square">Norman Qian</div>
        <div className="bg-amber-500 aspect-square">Norman Qian</div>
      </div>

      <div className="bg-yellow-500 aspect-auto">Norman Qian</div>
    </div>
  );
}
