import { ButtonProps, buttonConfig } from "./button";
import cx from "classnames";

const AmtButton = ({ color, children, onClick }: ButtonProps) => {
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
