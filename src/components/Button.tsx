import type { ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  handleClick: () => void;
}

export const Button = ({
  children,
  handleClick,
  color = "primary",
}: ButtonProp) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};
