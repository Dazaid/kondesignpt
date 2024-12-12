import { Box } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useScroll } from "../ScrollContext";
import Carousel from './Carousel';
import { useLocation, useEffect } from 'react';

const GraciosaConfeitaria = [
  'assets/GraciosaConfeitaria/Slide45.jpg',
  'assets/GraciosaConfeitaria/Slide44.jpg',
  'assets/GraciosaConfeitaria/Slide43.jpg',
  'assets/GraciosaConfeitaria/Slide42.jpg',
];

const AcaiConcept = [
  'assets/AcaiConcept/Slide1.jpg',
  'assets/AcaiConcept/Slide2.jpg',
  'assets/AcaiConcept/Slide3.jpg',
  'assets/AcaiConcept/Slide4.jpg',
  'assets/AcaiConcept/Slide5.jpg',
];

const Aromatic = [
  'assets/Aromatic/PHOTO-2023-04-03-17-23-57-2.jpg',
  'assets/Aromatic/PHOTO-2023-04-03-17-23-57-3.jpg',
  'assets/Aromatic/PHOTO-2023-04-03-17-23-57-4.jpg',
  'assets/Aromatic/PHOTO-2023-04-03-17-23-57.jpg',
];

const QueijoCoalhoPortugal = [
  'assets/QueijoCoalhoPortugal/Slide10.jpg',
  'assets/QueijoCoalhoPortugal/Slide11.jpg',
  'assets/QueijoCoalhoPortugal/Slide12.jpg',
  'assets/QueijoCoalhoPortugal/Slide13.jpg',
]

const Kantar = [
  'assets/Kantar/Slide14.jpg',
  'assets/Kantar/Slide15.jpg',
  'assets/Kantar/Slide16.jpg',
  'assets/Kantar/Slide17.jpg',
]

const BarberShop = [
  'assets/BarberShop/Slide37.jpg',
  'assets/BarberShop/Slide38.jpg',
  'assets/BarberShop/Slide39.jpg',
  'assets/BarberShop/Slide40.jpg',
  'assets/BarberShop/Slide41.jpg',
]

const Portfolio = () => {

  const { servicosRef, portfolioRef, socialRef } = useScroll();

  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/portfolio"
  useEffect(() => {
    // Si la ruta es "/portfolio", hacemos el scroll suave hasta la parte superior de la sección de portfolio
    if (window.location.pathname === "/portfolio" && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente



  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/redes-sociais"
  useEffect(() => {
    // Si la ruta es "/redes-sociais", hacemos el scroll suave hasta la parte superior de la sección de social
    if (window.location.pathname === "/redes-sociais" && socialRef.current) {
      socialRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componenteSolo se ejecuta una vez al cargar el componente

  return (
    <>
      <Box ref={portfolioRef} className="flex justify-center items-center bg-[#0b0009] w-[100vw] py-16">
        <Box className="flex flex-col gap-16 justify-center items-center w-[100vw]">
          <Box className="flex flex-row gap-16">
            <Carousel images={GraciosaConfeitaria} labelup={"Graciosa Confeitaria"} labeldown={"Montra"} />
            <Carousel images={AcaiConcept} labelup={"Açaí Concept"} labeldown={"Montra"} />
          </Box>
          <Box className="flex flex-row gap-16">
            <Carousel images={Aromatic} labelup={"Aromatic"} labeldown={"Decoração de Montra"} />
            <Carousel images={QueijoCoalhoPortugal} labelup={"Queijo Coalho Portugal"} labeldown={"Banner Roll Up"} />
          </Box>
          <Box className="flex flex-row gap-16">
            <Carousel images={Kantar} labelup={"Kantar"} labeldown={"Vinil Auto Colante"} />
            <Carousel images={BarberShop} labelup={"Barber Shop"} labeldown={"Cavalete"} />
          </Box>
          <a target="_blank" href="https://wa.me/351913916397"><button className='hover:scale-105 transition-all duration-300 text-[#0b0009] bg-white py-3 px-5 rounded-lg font-bold'>SOLICITAR ORÇAMENTO</button></a>
        </Box>
      </Box>



      <Box ref={socialRef} className="text-white flex flex-row gap-20 justify-center text-start items-center h-[16vh] w-[100vw] bg-gradient-to-r from-[#e1a901] from-0% via-[#020202] via-50% to-[#200b39] to-100%">
        <p>
          NOVIDADES <br />
          EXCLUSIVAS <br />
          NAS NOSSAS <br />
          <b>REDES SOCIAIS</b> <br />
        </p>
        <Box className="flex flex-row gap-14">
          <a aria-label="Instagram" target="_blank" href="https://www.instagram.com/kon_design_/"><Box className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
            <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
          </Box></a>
          <a aria-label="Facebook" target="_blank" href="https://www.facebook.com/kondesignpt"><Box className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
            <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
          </Box></a>
          <a aria-label="WhatsApp" target="_blank" href="https://wa.me/351913916397"><Box className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
            <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
          </Box></a>
        </Box>
      </Box>


      <Box ref={servicosRef} className="flex flex-row gap-20 justify-center items-center pb-6 h-[22vh] w-[100vw] bg-[#0b0009] text-white">
        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon sx={{ fontSize: 50, color: '#ffc000' }} className='relative top-5 right-2' />
          <h2 className='text-3xl'>
            <b>
              BRANDING
            </b>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[7.5vw] h-[0.65vh] mt-2"></Box>
          <h3 className='text-md'>
            IDENTIDADE VISUAL <br />
            LOGOTIPO <br />
            REBRAND
          </h3>
        </Box>

        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon sx={{ fontSize: 50, color: '#fff' }} className='relative top-5 right-2' />
          <h2 className='text-3xl'>
            <b>
              PRINTING
            </b>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[7.5vw] h-[0.65vh] mt-2"></Box>
          <h3 className='text-md'>
            EXPOSITOR <br />
            LOGOTIPO <br />
            GRANDES FORMATOS
          </h3>
        </Box>

        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon sx={{ fontSize: 50, color: '#7030a0' }} className='relative top-5 right-2' />
          <h2 className='text-3xl font-bold'>
            WEB <strong>DESIGN</strong>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[7.5vw] h-[0.65vh] mt-2"></Box>
          <h3 className='text-md'>
            LANDINGPAGE <br />
            SITE <br />
            <br />
          </h3>
        </Box>
      </Box>

    </>
  );
};

export default Portfolio;
