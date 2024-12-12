import { Box } from '@mui/material';
import MCarousel from './MCarousel';
const MBrand = () => {

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
        <Box className="flex flex-col gap-6 text-center">
          <h3 className="text-5xl font-bold">BRANDING</h3>
          <p className='text-xl w-[80vw]'>
            Confira todos os nossos projetos de 
            identidade visual, redes sociais e edição de 
            vídeo. Estamos à vossa disposição para auxiliar 
            no que for preciso!
          </p>
        </Box>
        <Box className="flex flex-col gap-16 mr-4 scale-[0.68] my-[-10rem]">
          <MCarousel images={Fusion} />
          <MCarousel images={BellaJardin} />
          <MCarousel images={JMC} />
        </Box>
      </Box>
    </>
  );
};

export default MBrand;
