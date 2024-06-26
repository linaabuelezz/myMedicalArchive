import { useState, createContext } from "react";
import PropTypes from "prop-types";


export const TempDataContext = createContext("");
export const TempDataProvider = ({children}) => {
    const [tempDateData, setTempDateData] = useState([]);
    const [tempFileData, setTempFileData] = useState([]);
    const [chosenBodyPart, setChosenBodyPart] = useState("1");

    return (
        <TempDataContext.Provider value={{tempDateData, tempFileData, setTempDateData, setTempFileData, chosenBodyPart, setChosenBodyPart}}>
            {children}
        </TempDataContext.Provider>
    )

}
export default TempDataContext;

TempDataProvider.propTypes = {
    children: PropTypes.node
}