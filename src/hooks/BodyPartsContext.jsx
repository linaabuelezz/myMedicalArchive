import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const BodyPartsContext = createContext();

export const BodyPartsProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([
    { partName: "Head", id: "1", files: [], dates: [] },
    { partName: "Neck", id: "2", files: [], dates: [] },
    { partName: "Shoulders", id: "3", files: [], dates: [] },
    { partName: "Arms", id: "4", files: [], dates: [] },
    { partName: "Hands", id: "5", files: [], dates: [] },
    { partName: "Torso", id: "6", files: [], dates: [] },
    { partName: "Hips", id: "7", files: [], dates: [] },
    { partName: "Legs", id: "8", files: [], dates: [] },
    { partName: "Feet", id: "9", files: [], dates: [] },
  ]);

  useEffect(() => {
    const savedBodyParts = localStorage.getItem('bodyParts');
    if (savedBodyParts) {
      setBodyParts(JSON.parse(savedBodyParts));
    }
  }, []);
  console.log(bodyParts);


  return (
    <BodyPartsContext.Provider value={{ bodyParts, setBodyParts }}>
      {children}
    </BodyPartsContext.Provider>
  );
};

BodyPartsProvider.propTypes = {
    children: PropTypes.node
}

export default BodyPartsContext;
