import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { ScrollProvider } from "./ScrollContext.jsx";

// Lazy load the mobile components
import MHome from "./mobileComponents/MHome.jsx";
import MFeedback from "./mobileComponents/MFeedback.jsx";
import MPortfolio from "./mobileComponents/MPortfolio.jsx";
import MBrand from "./mobileComponents/MBrand.jsx";
import MPrint from "./mobileComponents/MPrint.jsx";
import MWeb from "./mobileComponents/MWeb.jsx";
import MClientes from "./mobileComponents/MClientes.jsx";
import MAbout from "./mobileComponents/MAbout.jsx";
import MContactAndPrefooter from "./mobileComponents/MContactAndPrefooter.jsx";
import MFootter from "./mobileComponents/MFootter.jsx";

function AppMobile() {

  return (
    <ScrollProvider>
      <Box className="overflow-x-hidden w-[100vw]">
      <MHome />
      <MFeedback />
      <MPortfolio />
      <MBrand />
      <MPrint />
      <MWeb />
      <MClientes />
      <MAbout />
      <MContactAndPrefooter />
      <MFootter />
      </Box>
    </ScrollProvider>
  );
}

export default AppMobile;
