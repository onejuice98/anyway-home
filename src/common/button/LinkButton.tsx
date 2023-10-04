import { Link } from "react-router-dom";
import { ButtonProps } from "./button";
import Button from ".";

const LinkButton = ({ url = "", color, children }: ButtonProps) => {
  return (
    <Link to={url}>
      <Button color={color}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
