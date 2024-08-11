import HomeSelectBodyPart from "../components/homepage-components/HomeSelectBodyPart";
import FilesDisplay from "../components/homepage-components/FilesDisplay";
import { HomePageProvider } from "../hooks/HomePageContext";
import DatesDisplay from "../components/homepage-components/DatesDisplay";

const HomePage = () => {
  return (
    <>
      <div className="bg-fixed h-screen bg-[url('/assets/medbackground2.jpeg')] bg-cover bg-center overflow-auto">
        <HomePageProvider>
          <div className="container mx-auto px-4 py-8">
            <HomeSelectBodyPart />
            <div className="flex flex-col md:flex-row m-2 space-y-4 md:space-y-0 md:space-x-4">
              <FilesDisplay />
              <DatesDisplay />
            </div>
          </div>
        </HomePageProvider>
      </div>
    </>
  );
};

export default HomePage;
