import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import { Globalstyled } from "./global/global.styled";
import UseMainContext from "./hooks/UseMainContext";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";

function App() {
  const [isDark, setIsDark] = useState(false);
  const { mode } = UseMainContext();
  return (
    <ThemeProvider theme={{ mode }}>
      <Globalstyled style={{ position: "relative" }} className={`App ${mode}`}>
        <Router>
          <Header setIsDark={setIsDark} mode={mode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/order" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Globalstyled>
    </ThemeProvider>
  );
}

export default App;
