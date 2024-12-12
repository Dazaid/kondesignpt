import { useState, useEffect, useLocation } from "react";
import { useScroll } from "../ScrollContext";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "./Carousel";


const Print = () => {
  const { printRef } = useScroll();
  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/grandes-formatos"
  useEffect(() => {
    // Si la ruta es "/grandes-formatos", hacemos el scroll suave hasta la parte superior de la sección de print
    if (window.location.pathname === "/grandes-formatos" && printRef.current) {
      printRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente

  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/decoracao-de-montra"
  useEffect(() => {
    // Si la ruta es "/decoracao-de-montra", hacemos el scroll suave hasta la parte superior de la sección de print
    if (window.location.pathname === "/decoracao-de-montra" && printRef.current) {
      printRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente

  // Usamos un useEffect para hacer scroll suave cuando la ruta sea "/letras-en-relieve"
  useEffect(() => {
    // Si la ruta es "/letras-en-relieve", hacemos el scroll suave hasta la parte superior de la sección de print
    if (window.location.pathname === "/letras-en-relieve" && printRef.current) {
      printRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente

  const [loaded, setLoaded] = useState(false);

  const imageGroups = {

    AcaiConcept: [
      'assets/AcaiConcept/Slide1.jpg',
      'assets/AcaiConcept/Slide2.jpg',
      'assets/AcaiConcept/Slide3.jpg',
      'assets/AcaiConcept/Slide4.jpg',
      'assets/AcaiConcept/Slide5.jpg',
    ],

    Automotive: [
      'assets/Automotive/Slide25.jpg',
      'assets/Automotive/Slide26.jpg',
      'assets/Automotive/Slide27.jpg',
      'assets/Automotive/Slide28.jpg',
      'assets/Automotive/Slide29.jpg',
    ],

    Vitalife: [
      'assets/Vitalife/Slide20.jpg',
      'assets/Vitalife/Slide21.jpg',
    ],


    Pilates: [
      'assets/Pilates/Slide23.jpg',
      'assets/Pilates/Slide24.jpg',
    ],

    Kantar2: [
      'assets/Kantar2/Slide30.jpg',
      'assets/Kantar2/Slide31.jpg',
      'assets/Kantar2/Slide32.jpg',
      'assets/Kantar2/Slide33.jpg',
    ],

    //  MayconGerald : [
    //   'assets/MayconGerald/Slide34.jpg',
    //   'assets/MayconGerald/Slide35.jpg',
    //   'assets/MayconGerald/Slide36.jpg',
    // ];

    GF1: [
      'assets/GrandesFormatos/sl1.jpg',
      'assets/GrandesFormatos/sl1.jpg',
      'assets/GrandesFormatos/sl1.jpg',
    ],

    GF2: [
      'assets/GrandesFormatos/sl2.jpg',
      'assets/GrandesFormatos/sl2.jpg',
      'assets/GrandesFormatos/sl2.jpg',
    ],

    GF3: [
      'assets/GrandesFormatos/sl3.jpg',
      'assets/GrandesFormatos/sl3.jpg',
      'assets/GrandesFormatos/sl3.jpg',
    ],

    GF4: [
      'assets/GrandesFormatos/sl4.jpg',
      'assets/GrandesFormatos/sl4.jpg',
      'assets/GrandesFormatos/sl4.jpg',
    ],

    GF5: [
      'assets/GrandesFormatos/sl5.jpg',
      'assets/GrandesFormatos/sl5.jpg',
      'assets/GrandesFormatos/sl5.jpg',
    ],

    GF6: [
      'assets/GrandesFormatos/sl6.jpg',
      'assets/GrandesFormatos/sl6.jpg',
      'assets/GrandesFormatos/sl6.jpg',
    ],

    GF7: [
      'assets/GrandesFormatos/sl7.jpg',
      'assets/GrandesFormatos/sl7.jpg',
      'assets/GrandesFormatos/sl7.jpg',
    ],
  };

  useEffect(() => {
    const allImages = Object.values(imageGroups).flat();
    const loadImages = allImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(loadImages).then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box ref={printRef} className="flex flex-col justify-center items-center gap-10 bg-[#fff] w-[100vw] py-16">
        <Box className="flex flex-row gap-16">
          <h3 className="text-7xl font-bold ">GRANDES FORMATOS</h3>
          <p>
            Confira todos os nossos projetos impressos, <br />
            como cartões de visita, montras, cavaletes, <br />
            autocolantes em vinil e etc. Estamos à vossa <br />
            disposição para auxiliar no que for preciso!
          </p>
        </Box>
        <Box className="flex flex-row justify-center items-center gap-10 w-[17rem]">
          <Carousel images={imageGroups.AcaiConcept} />
          <Carousel images={imageGroups.Automotive} />
          <Carousel images={imageGroups.Vitalife} />
        </Box>
        <Box className="flex flex-row justify-center items-center gap-10 w-[17rem]">

          <Carousel images={imageGroups.Pilates} />
          <Carousel images={imageGroups.Kantar2} />
          <Carousel images={imageGroups.GF7} />
        </Box>
        <Box className="flex flex-row justify-center items-center gap-10 w-[17rem]">

          <Carousel images={imageGroups.GF1} />
          <Carousel images={imageGroups.GF2} />
          <Carousel images={imageGroups.GF3} />
        </Box>
        <Box className="flex flex-row justify-center items-center gap-10 w-[17rem]">
          <Carousel images={imageGroups.GF4} />
          <Carousel images={imageGroups.GF5} />
          <Carousel images={imageGroups.GF6} />
        </Box>
      </Box>
    </>
  );
};

export default Print;
