import HomeSelectBodyPart from "../components/homepage-components/HomeSelectBodyPart";
import FilesDisplay from "../components/homepage-components/FilesDisplay";
import { HomePageProvider } from "../hooks/HomePageContext";
import DatesDisplay from "../components/homepage-components/DatesDisplay";

const HomePage = () => {
  return (
    <>
      <div className=" bg-fixed h-screen bg-[url('/assets/medbackground2.jpeg')] bg-cover bg-center overflow-hidden">
        <HomePageProvider>
          <HomeSelectBodyPart />
          <div className="flex m-2">
            <FilesDisplay />
            <DatesDisplay />
          </div>
        </HomePageProvider>
      </div>
    </>
  );
};

export default HomePage;
