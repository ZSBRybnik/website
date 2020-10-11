import styled from "styled-components";

interface InputBoxWrapperProps {
  type?: string;
}

const InputBoxWrapper = styled.div<InputBoxWrapperProps>`
  display: ${({ type }) => (type === "checkbox" ? "flex" : "block")};
  /*align-items: center;*/
`;

export default InputBoxWrapper;
