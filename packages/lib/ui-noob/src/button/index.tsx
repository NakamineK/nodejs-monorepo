type Props = Omit<React.ComponentProps<"button">, "children"> & {
  label: string;
};

export const Button = (props: Props) => {
  return <button className={className.base}>{props.label}</button>;
};

const className = {
  base: "bg-green-200 rounded-2xl px-5 py-3 text-xl font-bold text-blue-900 shadow",
};
