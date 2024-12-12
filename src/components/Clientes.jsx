import { Box } from '@mui/material';
import CarouselClientes from './CarouselClientes';
const Clientes = () => {

  return (
    <>
      <Box className="flex flex-col justify-center items-center konradialgradient w-[100vw] py-16">
        <h3 className="text-7xl font-bold text-white mb-6">CLIENTES</h3>
        <CarouselClientes />
      </Box>
    </>
  );
};

export default Clientes;
