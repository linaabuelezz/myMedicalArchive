import "./App.css";
import AddingInformationPage from "./pages/AddingInformationPage";
import { OpeningDialogueProvider } from "./hooks/openingDialogue";
import Navbar from "./components/Navbar";
import { BodyPartsProvider } from "./hooks/BodyPartsContext";
import { TempDataProvider } from "./hooks/TempDataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { HomePageProvider } from "./hooks/HomePageContext";
import EventDetails from "./components/homepage-components/EventDetails";
import FileDetails from "./components/homepage-components/FileDetails";
// import dotenv from 'dotenv';
// dotenv.config();


function App() {
  return (
    <BodyPartsProvider>
      <HomePageProvider>
      <TempDataProvider>
    <OpeningDialogueProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/home-page" element={<HomePage />}></Route>
        <Route path="/about-page" element={<AboutPage />}></Route>
        <Route path="/add-details" element={<AddingInformationPage />}></Route>
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/file/:fileId" element={<FileDetails />} />
      </Routes>
      </Router>
    </OpeningDialogueProvider>
    </TempDataProvider>
    </HomePageProvider>
    </BodyPartsProvider>
  );
}

export default App;
