import { Box, CssBaseline} from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";


function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
