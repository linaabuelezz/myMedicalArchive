import "./App.css";
import AddingInformationPage from "./pages/AddingInformationPage";
import { OpeningDialogueProvider } from "./hooks/openingDialogue";
import Navbar from "./components/Navbar";
import { BodyPartsProvider } from "./hooks/BodyPartsContext";
import { TempDataProvider } from "./hooks/TempDataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BodyPartsProvider>
      <TempDataProvider>
    <OpeningDialogueProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/home-page" element={<HomePage />}></Route>
        <Route path="/about-page" element={<AboutPage />}></Route>
        <Route path="/add-details" element={<AddingInformationPage />}></Route>
      </Routes>
      </Router>
    </OpeningDialogueProvider>
    </TempDataProvider>
    </BodyPartsProvider>
  );
}

export default App;
