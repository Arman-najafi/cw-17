import { useEffect } from "react";
import Subject from "./subject";

export default function Summary() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Summary</h1>
      <Subject />
      <button>continue</button>
    </div>
  );
}
