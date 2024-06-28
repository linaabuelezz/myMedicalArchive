import HomeSelectBodyPart from "../components/homepage-components/HomeSelectBodyPart";
import FilesDisplay from "../components/homepage-components/FilesDisplay";
import { HomePageProvider } from "../hooks/HomePageContext";
import DatesDisplay from "../components/homepage-components/DatesDisplay";

const HomePage = () => {
  return (
    <>
      <HomePageProvider>
        <h2 className="font-bold mx-auto ml-4">Home Page</h2>
        <HomeSelectBodyPart />
        <div className="flex m-2">
          <FilesDisplay />
          <DatesDisplay />
        </div>
      </HomePageProvider>
    </>
  );
};

export default HomePage;
