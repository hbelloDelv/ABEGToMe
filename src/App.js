import { Box, CssBaseline} from "@mui/material";
import Header from "./components/Header/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Partnership from "./components/Partnership/Partnership";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Gallery from "./components/Gallary/Gallary";
import About from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import ServiceDetail from "./components/Services/ServiceDetail";

import { serviceData} from '../src/components/Services/serviceData'
import {blogdata} from '../src/components/Blog/blogdata'

function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/services/:id" element={<ServiceDetail  serviceData={serviceData}/>}></Route>
            <Route path="/partnership" element={<Partnership />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogDetail blogData={blogdata}/>}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      <Footer />
    </Box>
  );
}

export default App;
