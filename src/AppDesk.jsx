import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { ScrollProvider } from "./ScrollContext.jsx";

// Import the non-lazy components
import Home from "./components/Home.jsx";
import Feedback from "./components/Feedback.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Brand from "./components/Brand.jsx";
import Print from "./components/Print.jsx";
import Web from "./components/Web.jsx";
import Clientes from "./components/Clientes.jsx";
import About from "./components/About.jsx";
import ContactAndPrefooter from "./components/Contactandprefooter.jsx";
import Footter from "./components/Footter.jsx";

function AppDesk() {

  return (
    <ScrollProvider>
      <Box className="overflow-x-hidden">
      <Home />
      <Feedback />
      <Portfolio />
      <Brand />
      <Print />
      <Web />
      <Clientes />
      <About />
      <ContactAndPrefooter />
      <Footter />
      </Box>
    </ScrollProvider>
    
  );
}

export default AppDesk;
