import React from "react";
import Header from "../components/Banner/Banner";
import imgBanner from "../assets/image-bg.jpg";
import SectionIcons from "../components/SectionIcons/SectionIcons";
import SectionContent from "../components/SectionContent/SectionContent";
import img2 from "../assets/image-01.jpg";
import img3 from "../assets/image-02.jpg";
import img4 from "../assets/image-03.jpg";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header
        titulo="Minha primeira aplicação com ReactJS."
        background={imgBanner}
        height="60vh"
      />
      <SectionIcons />
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem deserunt quaerat? Eos modi esse ex dignissimos aspernatur excepturi reiciendis quis voluptates, recusandae dolores, officia provident eaque rerum! Consequuntur, dignissimos!
            Quisquam similique ea, corporis cum harum reprehenderit! Nisi cumque quos magni nemo ea repellendus corrupti cupiditate, at tempora aliquam architecto explicabo enim, magnam eius, a molestias itaque quo eveniet. Ut?
            Totam, quaerat aperiam! Perferendis repudiandae omnis voluptatum ab doloremque ex alias quasi odit, ad, magnam quibusdam beatae in non unde voluptatibus? Non minima ratione ducimus unde repudiandae sapiente vero magnam?
            Quia minima dolore ad ipsum dolorem! Obcaecati assumenda provident voluptates molestiae unde tempora, dolores voluptatibus? A fugit, architecto perferendis sit, quae illum saepe, voluptatem perspiciatis repudiandae voluptate obcaecati ab amet."
        imagem={img2}
      ></SectionContent>
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem deserunt quaerat? Eos modi esse ex dignissimos aspernatur excepturi reiciendis quis voluptates, recusandae dolores, officia provident eaque rerum! Consequuntur, dignissimos!
            Quisquam similique ea, corporis cum harum reprehenderit! Nisi cumque quos magni nemo ea repellendus corrupti cupiditate, at tempora aliquam architecto explicabo enim, magnam eius, a molestias itaque quo eveniet. Ut?
            Totam, quaerat aperiam! Perferendis repudiandae omnis voluptatum ab doloremque ex alias quasi odit, ad, magnam quibusdam beatae in non unde voluptatibus? Non minima ratione ducimus unde repudiandae sapiente vero magnam?
            Quia minima dolore ad ipsum dolorem! Obcaecati assumenda provident voluptates molestiae unde tempora, dolores voluptatibus? A fugit, architecto perferendis sit, quae illum saepe, voluptatem perspiciatis repudiandae voluptate obcaecati ab amet."
        imagem={img3}
        reverse
      ></SectionContent>
      <SectionContent
        titulo="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem deserunt quaerat? Eos modi esse ex dignissimos aspernatur excepturi reiciendis quis voluptates, recusandae dolores, officia provident eaque rerum! Consequuntur, dignissimos!
            Quisquam similique ea, corporis cum harum reprehenderit! Nisi cumque quos magni nemo ea repellendus corrupti cupiditate, at tempora aliquam architecto explicabo enim, magnam eius, a molestias itaque quo eveniet. Ut?
            Totam, quaerat aperiam! Perferendis repudiandae omnis voluptatum ab doloremque ex alias quasi odit, ad, magnam quibusdam beatae in non unde voluptatibus? Non minima ratione ducimus unde repudiandae sapiente vero magnam?
            Quia minima dolore ad ipsum dolorem! Obcaecati assumenda provident voluptates molestiae unde tempora, dolores voluptatibus? A fugit, architecto perferendis sit, quae illum saepe, voluptatem perspiciatis repudiandae voluptate obcaecati ab amet."
        imagem={img4}
      ></SectionContent>
      <Header titulo="Contato" background={imgBanner} height="30vh" />
      <Footer />
    </>
  );
};

export default Home;
