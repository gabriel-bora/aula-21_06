import styled from 'styled-components';

const ContainerIconStyled = styled.div`
  width: 25vw;
  text-align: center;
  span {
    font-size: 80px;
    color: ${(props) => props.theme.primary};
  }
  p {
    font-weight: 200;
  }
`;

export default ContainerIconStyled;
