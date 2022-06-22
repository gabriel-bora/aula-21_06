import styled from "styled-components";

interface SectionProps {
  reverse?: boolean;
}

const SectionContentStyled = styled.section<SectionProps>`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  .container-text {
    width: 50vw;
    padding: 10vh;
  }
`;

export default SectionContentStyled;
