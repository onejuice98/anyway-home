import { ButtonProps, buttonConfig } from "./button";
import cx from "classnames";

const Button = ({ color, children, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        "w-fit h-fit p-2 rounded-md text-2xl duration-200 shadow-md ",
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

export default Button;
