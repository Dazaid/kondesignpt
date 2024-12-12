import { Box } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const MContactAndPrefooter = () => {
  return (
    <>
      <Box className="konradialgradient4 flex flex-col gap-10 justify-center items-center py-6 pb-16 w-[100vw] bg-[#0b0009] text-white">
        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon 
          aria-label="TrendingFlatIcon4"
            sx={{ fontSize: 50, color: "#ffc000" }}
            className="relative top-5 right-2"
          />
          <h2 className="text-3xl">
            <b>MISSÃO</b>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-60 h-[0.65vh] mt-2"></Box>
          <p className="text-lg w-[80vw]">
            Trazer a essência do bom gosto, através da visão de um profissional
            de design, aprimorando nossos produtos e serviços e visando a
            qualidade e confiança no relacionamento com nossos clientes.
          </p>
        </Box>

        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon
            aria-label="TrendingFlatIcon5"
            sx={{ fontSize: 50, color: "#fff" }}
            className="relative top-5 right-2"
          />
          <h2 className="text-3xl">
            <b>VISÃO</b>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-60 h-[0.65vh] mt-2"></Box>
          <p className="text-lg w-[80vw]">
            Se tornar a médio prazo uma grande companhia no seguimento gráfico e
            comunicação visual com um crescimento contínuo e sustentável.
          </p>
        </Box>

        <Box className="flex flex-col justify-center items-start">
          <TrendingFlatIcon
            aria-label="TrendingFlatIcon6"
            sx={{ fontSize: 50, color: "#7030a0" }}
            className="relative top-5 right-2"
          />
          <h2 className="text-3xl">
            <b>VALORES</b>
          </h2>
          <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-60 h-[0.65vh] mt-2"></Box>
          <p className="text-lg w-[80vw]">
            Honestidade e Transparência. Compromisso com as pessoas e Qualidade.
          </p>
        </Box>
      </Box>

      <Box className="flex flex-col justify-center items-start bg-black">
        <Box className="flex flex-col items-start bg-black text-white p-6 w-[60vw]">
          <Box className="flex flex-col items-start w-[600px]">
            <Box>
              <h2 className="text-4xl font-bold mb-4">CONTATO</h2>
              <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[10rem] h-[1.5vh] "></Box>
            </Box>
            <Box component="p" className="text-left text-xl w-[80vw] mb-6 mt-6">
              Dúvidas? Não deixe de perguntar.
              Nos mande sua dúvida, elogio, sugestões 
              ou reclamações, vamos adorar estar recebendo sua mensagem.
            </Box>
          </Box>
          <Box component="form" className="w-[80vw] space-y-4">
            <Box className="flex space-x-4">
              <Box
                component="input"
                type="text"
                placeholder="Nome"
                className="w-1/2 p-2 border border-gray-600 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Box
                component="input"
                type="email"
                placeholder="E-mail"
                className="w-1/2 p-2 border border-gray-600 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </Box>
            <Box
              component="textarea"
              placeholder="Mensagem"
              className="w-full p-2 h-32 border border-gray-600 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Box className="w-full flex justify-end">
              <a
                aria-label="Enviar formulario mobile"
                href="#form"
                type="reset"
                className="px-8 font-bold p-2 bg-black text-white rounded-full border border-white"
              >
                Enviar
              </a>
            </Box>
          </Box>
        </Box>

        <Box className="flex flex-col gap-10 items-start bg-black text-white p-6 w-[90vw]">
          <a
            className="flex flex-row gap-2 items-center"
            target="_blank"
            href="tel:+351223701446"
            aria-label="Telefone para contato"
          >
            <svg
              className="relative top-[1px] fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <p className="text-xl text-[#fbba07] font-bold">
              +351 223 701 446
            </p>
          </a>
          <a
            className="flex flex-row gap-2 items-center"
            target="_blank"
            href="tel:+351913916397"
            aria-label="segundo Telefone para contato"
          >
            <svg
              className="relative top-[1px] fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <p className="text-xl text-[#fbba07] font-bold">
              +351 913 916 397
            </p>
          </a>
          <a
            className="flex flex-row gap-2 items-center"
            target="_blank"
            href="mailto:comercial@kondesignpt.com"
            aria-label="Email para contato"
          >
            <svg
              className="relative top-[1px] fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
            <p className="text-lg text-[#fbba07] font-bold">
              comercial@kondesignpt.com
            </p>
          </a>
          <a 
          aria-label="Endereço para contato"
          className="flex flex-row gap-2 items-center"
          target="_blank"
          href="https://maps.app.goo.gl/7BFVjHe37rvrv75y5">
            <svg 
              className="relative top-[1px] fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <p className="text-xl text-[#fbba07] font-bold">
              Vila Nova de Gaia - Porto
            </p>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default MContactAndPrefooter;
