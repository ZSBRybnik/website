import { FC, InputHTMLAttributes } from "react";
import InputBoxLabel from "./InputBoxLabel";
import InputBoxInput from "./InputBoxInput";
import InputBoxWrapper from "./InputBoxWrapper";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputBox: FC<InputBoxProps> = ({
  label,
  type,
  ...rest
}: InputBoxProps): JSX.Element => {
  return (
    <InputBoxWrapper type={type}>
      <InputBoxLabel>{label}</InputBoxLabel>
      <InputBoxInput {...rest} type={type as string} />
    </InputBoxWrapper>
  );
};

export default InputBox;
