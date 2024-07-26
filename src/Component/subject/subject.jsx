export default function Subject({ variant, children, ...props }) {
  let variantClasses = "";
  switch (variant) {
    case "Reaction":
      variantClasses = "bg-red-100 text-red-500";
      break;
    case "Memory":
      variantClasses = "bg-yellow-100 text-yellow-500";
      break;
    case "Verbal":
      variantClasses = "bg-green-100 text-green-500";
      break;
    case "Visual":
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
      <div className="font-semibold">{children}</div>
      <div className="text-slate-400 font-semibold">
        <span className="text-black ">80</span>/100
      </div>
    </div>
  );
}
