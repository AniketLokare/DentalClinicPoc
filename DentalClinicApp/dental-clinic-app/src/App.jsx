import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPatientPage from "./pages/patient/RegisterPatientPage";
import MainContent from "../src/components/layout/MainContent";
import "./styles/index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainContent />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
