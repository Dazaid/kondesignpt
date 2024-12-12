import { Box } from '@mui/material';
import MCarousel from './MCarousel';
const MWeb = () => {

  const JMC = [
    'assets/JMC/Slide58.jpg',
    'assets/JMC/Slide48.jpg',
    'assets/JMC/Slide49.jpg',
    'assets/JMC/Slide50.jpg',
  ];

  const InAleasha = [
    'assets/InAleasha/Slide51.jpg',
    'assets/InAleasha/Slide52.jpg',
    'assets/InAleasha/Slide53.jpg',
    'assets/InAleasha/Slide54.jpg',
  ];

  const Magik = [
    'assets/Magik/Slide55.jpg',
    'assets/Magik/Slide56.jpg',
    'assets/Magik/Slide57.jpg',
  ];

  return (
    <>
      <Box className="flex flex-col justify-center items-center bg-[#7030a1] w-[100vw] py-16">
        <Box className="flex flex-col gap-6 text-white justify-center items-center text-center">
          <h3 className="text-5xl font-bold">WEB DESIGN</h3>
          <p className='text-xl w-[80vw]'>
          Confira todos os nossos projetos de 
          identidade visual, redes sociais e edição de 
           vídeo. Estamos à vossa disposição para auxiliar 
          no que for preciso
          </p>
        </Box>
        <Box className="flex flex-col gap-16 mr-4 scale-[0.68] my-[-10rem]">
          <MCarousel images={JMC} />
          <MCarousel images={InAleasha} />
          <MCarousel images={Magik} />
        </Box>
      </Box>
    </>
  );
};

export default MWeb;
