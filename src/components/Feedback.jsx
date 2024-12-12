import { Box } from '@mui/material';

const Feedback = () => {
  return (
    <>
      <Box className="text-white flex justify-center text-center items-center h-[10vh] w-[100vw] bg-gradient-to-r from-[#e1a901] from-0% via-[#020202] via-50% to-[#200b39] to-100%">
        <h3>
          A KON é um espaço criativo que sabe Além da característica peculiar de cada produto ou serviço, <br />
          ela também oferece comodidade e praticidade.
        </h3>
      </Box>
      <Box className="flex flex-col justify-center items-center bg-[white] bg-cover h-[90vh] w-[100vw]">
        <img className='w-1/2' src="assets/Feedback.webp" alt="Google Feedback" />
        <a target='_blank' aria-label="Veja Nos"  href="https://maps.app.goo.gl/7BFVjHe37rvrv75y5"><button className='hover:scale-110 transition-all duration-300 relative bottom-16 left-96 font-bold rounded-3xl bg-[#1f0b37] text-white px-6 py-2 h-12 w-40'>Veja Nos</button></a>
      </Box>
    </>
  );
};

export default Feedback;
