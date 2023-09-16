import { ButtonHTMLAttributes, ReactNode } from "react";
import cx from "classnames";

interface AmtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "danger";
  children?: ReactNode;
}

const buttonConfig = {
  primary: {
    bgColor: "bg-primary",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
  secondary: {
    bgColor: "bg-secondary",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
  danger: {
    bgColor: "bg-danger",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
};

const AmtButton = ({ color, children, onClick }: AmtButtonProps) => {
  return (
    <button
      className={cx(
        "w-fit h-fit p-1 rounded-md text-2xl duration-200",
        buttonConfig[color].bgColor,
        buttonConfig[color].color,
        buttonConfig[color].hover
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AmtButton;
