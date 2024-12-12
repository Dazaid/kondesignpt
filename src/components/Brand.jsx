import { Box } from '@mui/material';
import Carousel from './Carousel';
const Brand = () => {

  const Fusion = [
    'assets/Fusion/Slide18-1.jpg',
    'assets/Fusion/Slide19-1.jpg',
  ];

  const BellaJardin = [
    'assets/BellaJardin/Slide7.jpg',
    'assets/BellaJardin/Slide8.jpg',
    'assets/BellaJardin/Slide9.jpg',
  ];

  const JMC = [
    'assets/JMC/Slide46.jpg',
    'assets/JMC/Slide47.jpg',
    'assets/JMC/Slide48.jpg',
    'assets/JMC/Slide49.jpg',
    'assets/JMC/Slide50.jpg',
  ];

  return (
    <>
      <Box className="flex flex-col justify-center items-center bg-[#ffd301] w-[100vw] py-16">
        <Box className="flex flex-row gap-16">
          <h3 className="text-7xl font-bold">BRANDING</h3>
          <p>
            Confira todos os nossos projetos de <br />
            identidade visual, redes sociais e edição de <br />
            vídeo. Estamos à vossa disposição para auxiliar <br />
            no que for preciso!
          </p>
        </Box>
        <Box className="flex flex-row justify-center items-center mt-10 gap-10 w-[17rem]">

          <Carousel images={Fusion} />
          <Carousel images={BellaJardin} />
          <Carousel images={JMC} />
        </Box>
      </Box>
    </>
  );
};

export default Brand;
