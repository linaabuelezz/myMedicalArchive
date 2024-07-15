import "./App.css";
import AddingInformationPage from "./pages/AddingInformationPage";
import { OpeningDialogueProvider } from "./hooks/OpeningDialogues";
import { BodyPartsProvider } from "./hooks/BodyPartsContext";
import { TempDataProvider } from "./hooks/TempDataContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { HomePageProvider } from "./hooks/HomePageContext";
import EventDetails from "./components/homepage-components/EventDetails";
import FileDetails from "./components/homepage-components/FileDetails";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ConditionalNavbar from "./components/ConditionalNavbar";

function App() {
  return (
    <BodyPartsProvider>
      <HomePageProvider>
        <TempDataProvider>
          <OpeningDialogueProvider>
            <Router>
              <ConditionalNavbar />
              <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/home-page" element={<HomePage />} />
                <Route path="/about-page" element={<AboutPage />}></Route>
                <Route path="/add-info" element={<AddingInformationPage />}></Route>
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
