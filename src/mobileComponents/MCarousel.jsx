import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, IconButton, CircularProgress } from "@mui/material";

// Función para intentar cargar la imagen con reintentos
const loadImageWithRetry = (src, retries = 3, delay = 1000) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src); // Resolución si carga bien
    img.onerror = (error) => {
      if (retries > 0) {
        setTimeout(() => {
          loadImageWithRetry(src, retries - 1, delay).then(resolve).catch(reject);
        }, delay);
      } else {
        reject(error); // Rechazo después de los intentos fallidos
      }
    };
  });
};

const Carousel = ({ images, labelup = "", labeldown = "" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]); // Para almacenar las imágenes cargadas
  const [failedImages, setFailedImages] = useState([]); // Para almacenar las imágenes que fallaron al cargar

  // Configuración de react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  // Cargar todas las imágenes antes de habilitar el carrusel
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((image) =>
        loadImageWithRetry(image)
          .then(() => {
            setLoadedImages((prev) => [...prev, image]); // Añadir a las imágenes cargadas
          })
          .catch(() => {
            setFailedImages((prev) => [...prev, image]); // Añadir a las imágenes fallidas
          })
      );

      // Esperar a que todas las imágenes terminen de cargar
      await Promise.all(promises);

      // Desactivar el loader cuando todas las imágenes hayan intentado cargarse
      setIsLoading(false);
    };

    loadImages();
  }, [images]);

  return (
    <>
      <Box className="w-[100%]">
        <Box className={`${isFullscreen ? "fixed inset-0 bg-black z-50 w-[100vw] h-[100vh]" : "relative bg-transparent"} flex items-center bg-transparent w-[100%] justify-center transform transition duration-300 ease-in-out`}>
          <Box className="w-[100%] max-w-xl">


            {/* Mostrar un loader mientras las imágenes están cargando */}
            {isLoading ? (
              <Box className="flex justify-center items-center h-96">
                <CircularProgress color="primary" /> {/* Indicador de carga */}
              </Box>
            ) : (
              <Box className={`${isFullscreen ? "fixed inset-0 bg-black z-50 w-[100vw] h-[100vh] scale-[1.7]" : "relative bg-transparent"} flex items-center justify-center transform transition duration-300 ease-in-out`}>
                <Box className="w-full max-w-[400px] aspect-square">
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <Box key={index} className="flex justify-center items-center">
                        <Box className="relative w-full max-w-[400px] aspect-square overflow-hidden">
                          <img
                          loading="lazy"
                            src={loadedImages.includes(image) ? image : "/fallback-image.jpg"} // Usar imagen de fallback si falló
                            alt={`Slide ${index + 1}`}
                            className={`rounded-lg object-cover w-full h-full`}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            )}

            {/* Mostrar imágenes fallidas como mensaje opcional */}
            {failedImages.length > 0 && (
              <Box className="text-center text-red-500 mt-4">
                <p>Hubo un problema al cargar algunas imágenes.</p>
                <ul>
                  {failedImages.map((image, index) => (
                    <li key={index}>{image}</li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
        </Box>

        <Box className="text-center">
          <p className="text-white text-2xl font-semibold">{labelup}</p>
          <p className="text-white text-2xl">{labeldown}</p>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
