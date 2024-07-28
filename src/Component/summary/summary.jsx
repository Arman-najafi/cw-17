import { useContext } from "react";
import Button from "../button/Button";
import Subject from "../subject/subject";
import { RootContext } from "../../context/RootContextProvider";

export default function Summary() {
  const { gradeList } = useContext(RootContext);
  console.log(gradeList);
  return (
    <div className="w-[300px] h-[420px] pt-4 pb-8 flex flex-col justify-center items-center rounded-2xl cursor-default bg-white">
      <h1 className="font-bold mr-36 text-xl">Summary</h1>
      <div className="flex flex-col justify-center items-center gap-4 pt-6 pb-8">
        {gradeList.data.map((item) => {
          console.log(item);
          return (
            <Subject variant={item.category} score={item.score} key={item.id}>
              {item.category}
            </Subject>
          );
        })}
      </div>
      <Button variant={"summary"}>Continue</Button>
    </div>
  );
}
