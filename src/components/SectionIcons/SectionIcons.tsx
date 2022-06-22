import * as React from 'react';
import { BsBoxSeam, BsHandThumbsUp, BsLaptop } from 'react-icons/bs';
import styled from 'styled-components';
import ContainerIcon from '../ContainerIcons/ContainerIcons';

const SectionIconStyled = styled.div`
  width: 100%;
  padding-top: 13vh;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const SectionIcons = () => {
  return (
    <SectionIconStyled>
      <ContainerIcon titulo='Somente para desktop' texto='Vamos aprender como utilizar um framework' icon={<BsLaptop />} />
      <ContainerIcon titulo='Criado com componentes' texto='Utilizamos o Styled Components' icon={<BsBoxSeam />} />
      <ContainerIcon
        titulo='Fácil aproveitamento'
        texto='Estamos no caminho'
        icon={<BsHandThumbsUp />}
      />
    </SectionIconStyled>
  );
};

export default SectionIcons;
