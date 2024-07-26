import Button from "../button/Button";
import Subject from "../subject/Subject";

export default function Summary() {
  return (
    <div className="w-80 h-[420px] pt-4 pb-8 flex flex-col justify-center items-center rounded-2xl cursor-default bg-white">
      <h1 className="font-bold">Summary</h1>
      <div className="flex flex-col justify-center items-center gap-3 py-8">
        <Subject variant={"Reaction"}>Reaction</Subject>
        <Subject variant={"Memory"}>Memory</Subject>
        <Subject variant={"Verbal"}>Verbal</Subject>
        <Subject variant={"Visual"}>Visual</Subject>
      </div>
      <Button variant={"summary"}>Continue</Button>
    </div>
  );
}
