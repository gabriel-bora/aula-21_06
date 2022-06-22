import styled from "styled-components";

interface BoxImageProps {
  image: string;
}

const BoxImage = styled.div<BoxImageProps>`
  width: 50vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

export default BoxImage;
