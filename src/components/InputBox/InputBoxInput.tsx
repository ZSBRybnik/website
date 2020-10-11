import styled from "styled-components";

interface InputBoxInputProps {
  type: string;
}

const InputBoxInput = styled.input<InputBoxInputProps>`
  padding: 2.5px;
  width: ${({ type }) => (type === "checkbox" ? "auto" : "100%")};
  height: 19px;
  margin-left: ${({ type }) => (type === "checkbox" ? "5px" : "inherit")};
  outline: 0;
`;

export default InputBoxInput;
