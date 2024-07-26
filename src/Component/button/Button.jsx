export default function Button({ variant, children, ...props }) {
  let variantClasses = "";
  switch (variant) {
    case "summary":
      variantClasses = "bg-slate-700 text-white";
      break;
    default:
      variantClasses = "bg-slate-100";
      break;
  }
  return (
    <button className={`${variantClasses} w-56 rounded-3xl py-[10px] text-sm`}>
      {children}
    </button>
  );
}
