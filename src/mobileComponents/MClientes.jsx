import { Box } from '@mui/material';
import CarouselClientes from './MCarouselClientes';
const MClientes = () => {

  return (
    <>
      <Box className="flex flex-col justify-center items-center konradialgradient3 w-[100vw] py-16">
        <h3 className="text-5xl font-bold text-white mb-6">CLIENTES</h3>
        <Box className="scale-75">
        <CarouselClientes />
        </Box>
      </Box>
    </>
  );
};

export default MClientes;
