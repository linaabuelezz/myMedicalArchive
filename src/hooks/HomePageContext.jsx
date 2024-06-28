import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [chosenBodyPart, setChosenBodyPart] = useState("1");

  return (
    <HomePageContext.Provider value={{ chosenBodyPart, setChosenBodyPart }}>
      {children}
    </HomePageContext.Provider>
  );
};

HomePageProvider.propTypes = {
    children: PropTypes.node
}

export default HomePageContext;