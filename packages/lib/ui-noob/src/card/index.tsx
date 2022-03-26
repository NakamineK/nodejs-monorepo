export const Card = () => {
  return (
    <div className="container-type-inline-size w-[40vw] bg-red-300 overflow-hidden resize-x">
      parent
      <div className="w-32 h-32">
        <div className={[className.base, className["cq:sm"]].join(" ")}>
          child
        </div>
      </div>
    </div>
  );
};

const className = {
  base: "bg-slate-400 w-32 h-32",
  "cq:sm": "cq-w-16:bg-blue-600",
};
