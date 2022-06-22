import * as React from "react";
import styled from "styled-components";
import BoxImage from "../BoxImage/BoxImage";
import SectionContentStyled from "./SectionContentStyled";

interface SectionContentProps {
  titulo: string;
  texto: string;
  imagem: string;
  reverse?: boolean;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  titulo,
  texto,
  imagem,
  reverse,
}) => {
  return (
    <SectionContentStyled reverse={reverse}>
      <div className="container-text">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <BoxImage image={imagem} />
    </SectionContentStyled>
  );
};

export default SectionContent;
