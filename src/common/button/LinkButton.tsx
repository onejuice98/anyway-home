import { Link } from "react-router-dom";
import { ButtonProps } from "./button";
import AmtButton from "./AmtButton";

const LinkButton = ({ url = "", color, children }: ButtonProps) => {
  return (
    <Link to={url}>
      <AmtButton color={color}>{children}</AmtButton>
    </Link>
  );
};

export default LinkButton;
