import { Box, CssBaseline} from "@mui/material";
import Header from "./components/Header/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Partnership from "./components/Partnership/Partnership";
import Blog from "./components/Blog/Blog";
import Gallary from "./components/Gallary/Gallary";
import About from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import DetailPage from "./components/Services/DetailPage";

import { serviceData} from '../src/components/Services/serviceData'

function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/services/:id" element={<DetailPage  serviceData={serviceData}/>}></Route>
            <Route path="/partnership" element={<Partnership />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/gallary" element={<Gallary />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      <Footer />
    </Box>
  );
}

export default App;
