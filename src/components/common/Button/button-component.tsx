import { ButtonComponent } from "./button-style";
import { ButtonComponentTypes } from "./types";

const Button = ({
  className,
  children,
  type = "button",
  onClick,
}: ButtonComponentTypes) => {
  return (
    <ButtonComponent className={`${className}`} type={type} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
