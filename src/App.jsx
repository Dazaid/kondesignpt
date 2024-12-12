import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { Routes, Route, useNavigate, BrowserRouter, Navigate } from "react-router-dom"



// Detectar dispositivo antes de renderizar
const isMobile = window.innerWidth < 768;

const App = () => {
  const LazyApp = isMobile
  ? React.lazy(() => import("./AppMobile"))
  : React.lazy(() => import("./AppDesk"));

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <BrowserRouter>
        <Routes>
            {/* Rutas principales */}
            <Route path="/home" element={<LazyApp />
            } />
            <Route path="/portfolio" element={<LazyApp />
            } />
            <Route path="/sobre-nos" element={<LazyApp />
            } />
            <Route path="/grandes-formatos" element={<LazyApp />
            } />
            <Route path="/redes-sociais" element={<LazyApp />
            } />
            <Route path="/contatenos" element={<LazyApp />
            } />

            {/* Redirecciones de rutas no canónicas */}
            <Route path="/decoracao-de-montra" element={<LazyApp />
            } />
            <Route path="/letras-en-relieve" element={<LazyApp />
            } />

            {/* Ruta por defecto si el usuario navega a una no definida */}
            <Route path="*" element={<LazyApp />
            } />
        </Routes>
    </BrowserRouter >
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);