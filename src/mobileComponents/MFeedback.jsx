import { Box } from '@mui/material';

const MFeedback = () => {
  return (
    <>
      <Box className="text-white flex justify-center text-center items-center  w-[100vw] bg-gradient-to-r from-[#e1a901] from-0% via-[#020202] via-50% to-[#200b39] to-100%">
        <p>
          A KON é um espaço criativo que sabe Além da característica peculiar de cada produto ou serviço, <br />
          ela também oferece comodidade e praticidade.
        </p>
      </Box>
      <Box className="flex flex-col justify-center items-center bg-[white] bg-cover w-[100vw]">
        <img className='w-[80vw] mt-4' src="assets/Konbo.webp" alt="Kon Bot" />
        <img className='w-full mt-4' src="assets/MFeedback.webp" alt="Google Feedback" />

        <a aria-label="Veja Nos" target='_blank' className='my-6 flex justify-center items-center font-bold rounded-3xl bg-[#1f0b37] text-white px-6 py-2 h-12 w-40' href="https://maps.app.goo.gl/7BFVjHe37rvrv75y5">Veja Nos</a>
      </Box>
    </>
  );
};

export default MFeedback;
