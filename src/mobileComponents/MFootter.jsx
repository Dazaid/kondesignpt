import { Box } from '@mui/material';
import { useScroll } from "../ScrollContext";
import { useLocation, useEffect } from 'react';
const MFootter = () => {

  const { homeRef, servicosRef, portfolioRef, contactRef, footterRef, scrollToSection } = useScroll()
  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/contatenos"
  useEffect(() => {
    // Si la ruta es "/contatenos", hacemos el scroll suave hasta la parte superior de la sección de footer
    if (window.location.pathname === "/contatenos" && footterRef.current) {
      footterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente
  return (
    <>
      <footer ref={footterRef} className='bg-black text-white'>
        <Box className="bg-black py-6 w-[100vw] flex flex-col gap-6 justify-center items-center ">
          <img className="w-[40vw]" src="assets/Logo-KonDesign.webp" alt="Logo Footer" />
          <Box className="flex flex-row gap-6 text-md">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                scrollToSection(homeRef); // Función para desplazarte a la sección
                toggleMenu(); // Función para cerrar el menú
              }}
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                scrollToSection(contactRef); // Función para desplazarte a la sección "contact"
                toggleMenu(); // Función para cerrar el menú si es necesario
              }}
              aria-label="Ir a la sección Sobre nós"
            >
              <p>Sobre&nbsp;nós</p>
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(servicosRef);
                toggleMenu();
              }}
              aria-label="Ir a la sección Serviços"
            >
              <p>Serviços</p>
            </a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(portfolioRef);
                toggleMenu();
              }}
              aria-label="Ir a la sección Portifolio"
            >
              <p>Portifolio</p>
            </a>

          </Box>
          <p className='text-center'> 2024 © KonDesign. Todos os direitos reservados</p>
        </Box>
        <Box className="bg-gradient-to-r from-[#6d2f95] from-10% via-[#090310] via-50% to-[#fbba07] to-90% w-[100vw] h-[5vh] mt-2 flex flex-row justify-center items-center">
          <p className="text-sm flex flex-row justify-center items-center">
            Powered&nbsp;by&nbsp;
            <a target='_blank' className='flex flex-row justify-center items-center font-semibold' aria-label='Dazai' href="https://linktr.ee/DazaiDazai">
              Dazai&nbsp;&nbsp;
              <img className="w-6 h-6 bg-white rounded-[50%]" src="assets/DzkVector.svg" alt="Dazai Logo" />
            </a>
          </p>
        </Box>
      </footer>
    </>
  );
};

export default MFootter;
