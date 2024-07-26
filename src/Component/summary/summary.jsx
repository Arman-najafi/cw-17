import Subject from "../subject/Subject";

export default function Summary() {
  return (
    <div className="w-80 shadow-lg flex flex-col justify-center items-center rounded-2xl cursor-default bg-white">
      <h1 className="font-bold">Summary</h1>
      <div className="flex flex-col justify-center items-center gap-4 py-8">
        <Subject children={"Reaction"} variant={"Reaction"} />
        <Subject children={"Memory"} variant={"Memory"} />
        <Subject children={"Verbal"} variant={"Verbal"} />
        <Subject children={"Visual"} variant={"Visual"} />
      </div>
      <button>continue</button>
    </div>
  );
}
