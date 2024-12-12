import { Box } from "@mui/material";
import { useScroll } from "../ScrollContext";
import { useLocation, useEffect } from 'react';
const About = () => {

  const { contactRef } = useScroll();
  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/sobre-nos"
  useEffect(() => {
    // Si la ruta es "/sobre-nos", hacemos el scroll suave hasta la parte superior de la sección de contacto
    if (window.location.pathname === "/sobre-nos" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente
  return (
    <>
      <Box ref={contactRef} className="flex flex-row gap-32 justify-center items-center bg-black w-[100vw] py-16">
        <Box className="flex flex-col justify-center items-start w-[40vw]">
          <h3 className="text-7xl font-bold text-white">
            QUEM É A <br /> KON <br /> DESIGN
          </h3>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[17.5vw] h-[0.65vh] mt-2"></Box>
          <img className="mt-20" src="assets/GrafismosKon.png" alt="Grafismo" />
        </Box>
        <Box className="text-xl flex flex-col justify-center items-center w-[40vw] text-white">
          <p>
            A KON oferece um vasto conjunto de variedades, são mais de 60 tipos
            de materiais impressos e com a distribuição para toda a Europa, para
            otimizar o seu tempo e seus negócios. Quer uma impressão perfeita?
            <br /> <br />
            A KON faz para ti! Cuidar de cada detalhe da criação gráfica ao
            processo de impressão é a nossa especialidade, e uma das principais
            razões que atraem clientes de todo a Europa. É simplesmente a
            solução em Impressão Digital e Design gráfico que você tanto
            procura!
            <br /> <br />
            Disponibilizamos modelos com designs bem modernos para atender às
            necessidades de cada cliente.
            <br /> <br />
            Os produtos personalizados possuem acabamentos adaptados para todos
            os segmentos. Basta escolher o modelo que mais agrada e fazer uma
            compra fácil e rápida. Tecnologia, inovação são peças-chave da Kon
            Design, que sempre busca se atualizar no mercado para fortalecer o
            marketing, alavancar as vendas e aumentar o lucro de seus parceiros.
          </p>
        </Box>
      </Box>

      <Box className="flex flex-row gap-32 justify-center items-center bg-black w-[100vw] pb-16">
        <Box className="flex flex-col justify-center items-end w-[45vw]">
          <h3 className="text-7xl font-bold text-white">
            EQUIPE <br />
            QUE FAZ <br />
            AKONTECER
          </h3>
          <Box className="relative left-28 mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[27.5vw] h-[0.65vh] mt-2"></Box>
        </Box>

        <Box className="flex flex-row gap-32 justify-center items-center bg-black w-[100vw] py-16">
          <Box className="text-xl flex flex-col justify-center items-center w-[40vw] text-white">
            <img
              className="mt-20"
              src="assets/GrafismosKon.png"
              alt="Grafismo"
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-row gap-2 justify-center text-white items-center bg-black w-[100vw] pb-20">
        <Box className="flex flex-col text-start justify-center items-center w-[20vw] text-white">
          <img
            className="w-64"
            src="assets/Equipa/Kennedy-Guerra.webp"
            alt="Kennedy Guerra"
          />
          <h3 className="text-4xl font-bold">Kennedy Guerra</h3>
          <Box className=" mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-64 h-[0.65vh] mt-2"></Box>
          <h4 className="text-2xl font-bold">Sales manager</h4>
          <p className="text-lg">comercial@kondesignpt.com</p>
        </Box>

        <Box className="flex flex-col text-start justify-center items-center w-[20vw] text-white">
          <img
            className="w-64"
            src="assets/Equipa/Mayckson-Moura.webp"
            alt="Mayckson Moura"
          />
          <h3 className="text-4xl font-bold">Mayckson Moura</h3>
          <Box className=" mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-64 h-[0.65vh] mt-2"></Box>
          <h3 className="text-2xl font-bold">Graphic Design</h3>
          <p className="text-lg">creative@kondesignpt.com</p>
        </Box>

        <Box className="flex flex-col text-start justify-center items-center w-[20vw] text-white">
          <img
            className="w-64"
            src="assets/Equipa/Karina-Rinaldi.webp"
            alt="Karina Rinaldi"
          />
          <h3 className="text-4xl font-bold">Karina Rinaldi</h3>
          <Box className=" mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-64 h-[0.65vh] mt-2"></Box>
          <h4 className="text-2xl font-bold">Photography</h4>
          <p className="text-lg">creative@kondesignpt.com</p>
        </Box>
      </Box>
    </>
  );
};

export default About;
