import * as React from 'react';
import BannerStyled from './BannerStyled';

interface BannerProps {
  titulo: string;
  background: string;
  height: string;
}

const Banner: React.FC<BannerProps> = ({ titulo, background, height }) => {
  return (
    <BannerStyled urlImagem={background} height={height}>
      <h6>{titulo}</h6>
    </BannerStyled>
  );
};

export default Banner;
