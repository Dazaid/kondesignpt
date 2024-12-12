import { Box } from '@mui/material';
import Carousel from './Carousel';
const Web = () => {

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
        <Box className="flex flex-row gap-20 text-white justify-center items-center">
          <h3 className="text-7xl font-bold">WEB <br /> DESIGN</h3>
          <p>
          Confira todos os nossos projetos de <br />
          identidade visual, redes sociais e edição de <br />
           vídeo. Estamos à vossa disposição para auxiliar <br />
          no que for preciso
          </p>
        </Box>
        <Box className="flex flex-row justify-center items-center gap-10 mt-10 w-[17rem]">

          <Carousel images={JMC} />
          <Carousel images={InAleasha} />
          <Carousel images={Magik} />
        </Box>
      </Box>
    </>
  );
};

export default Web;
