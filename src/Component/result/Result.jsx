import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function Result() {
  const { gradeList, dispatch } = useContext(RootContext);
  dispatch({ type: "average", payload: gradeList });

  return (
    <div className="w-[300px] h-[420px] pt-4 pb-8 flex flex-col justify-center items-center rounded-2xl cursor-default mainGradient gap-6">
      <p className="font-semibold text-gray-300">Your Result</p>
      <div className="text-white flex flex-col justify-center items-center secondaryGradient w-40 h-40 rounded-full">
        <h1 className="text-6xl font-semibold">76</h1>
        <p className="text-slate-300 text-sm">of 100</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-white text-2xl">Great</h2>
        <p className="text-gray-300 w-48 text-center text-sm">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
("z-10 w-72 -ml-[270px] h-[420px] bg-blue-400  rounded-xl");
