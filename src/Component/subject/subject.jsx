export default function Subject({ variant, children, score, ...props }) {
  let variantClasses = "";
  switch (variant) {
    case "reaction":
      variantClasses = "bg-red-100 text-red-500";
      break;
    case "memory":
      variantClasses = "bg-yellow-100 text-yellow-500";
      break;
    case "verbal":
      variantClasses = "bg-green-100 text-green-500";
      break;
    case "visual":
      variantClasses = "bg-blue-100 text-blue-500";
      break;
    default:
      variantClasses = "bg-slate-100 text-slate-500";
      break;
  }
  return (
    <div
      className={`${variantClasses} flex justify-between items-center rounded-lg py-3 w-60 px-3`}
    >
      <div className="font-semibold text-sm pl-4">{children}</div>
      <div className="text-slate-400 text-sm font-semibold">
        <span className="text-black">{score}</span>
        <span className="text-slate-400">{`/ 100`}</span>
      </div>
    </div>
  );
}
