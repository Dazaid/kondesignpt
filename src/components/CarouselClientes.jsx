import React, { useState, useEffect, useRef } from 'react';

const CarouselClientes = () => {
  const imagenes = [
    'assets/LogoClientes/Client1.webp',
    'assets/LogoClientes/Client2.webp',
    'assets/LogoClientes/Client3.webp',
    'assets/LogoClientes/Client4.webp',
    'assets/LogoClientes/Client5.webp',
    'assets/LogoClientes/Client6.webp',
    'assets/LogoClientes/Client7.webp',
    'assets/LogoClientes/Client8.webp',
    'assets/LogoClientes/Client9.webp',
    'assets/LogoClientes/Client10.webp',
    'assets/LogoClientes/Client11.png',
    'assets/LogoClientes/Client12.webp',
    'assets/LogoClientes/Client13.webp',
  ];

  const [indice, setIndice] = useState(0);
  const containerRef = useRef(null); // Referencia al contenedor del carrusel

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % imagenes.length); // Mueve al siguiente índice en loop
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [imagenes.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${indice * 50}%)`, // Mueve el carrusel basado en el índice
        }}
      >
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagen ${i + 1}`}
            className="h-[7rem] mx-5 scale-75"
          />
        ))}
        {/* Repetir las primeras imágenes para un loop infinito */}
        {imagenes.map((img, i) => (
          <img
            key={`repeat-${i}`}
            src={img}
            alt={`Imagen ${i + 1}`}
            className="h-[7rem] mx-5 scale-75"
          />
        ))}
                {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagen ${i + 1}`}
            className="h-[7rem] mx-5 scale-75"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselClientes;
