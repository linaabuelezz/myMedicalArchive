import { useContext } from "react";
import TempDataContext from "../../hooks/TempDataContext";

const DatesAddedBox = () => {
    const {tempDateData} = useContext(TempDataContext);
    return (
        <div className="border-2 border-black w-64 h-64 pl-0 mx-2 rounded-md">
            <h3 className="font-bold ml-1">Added Events:</h3>
        {tempDateData.map((file, index) => (
          <div key={index}>
            <p>{file.newEventName} : {file.newEventDate}</p>
          </div>
        ))}
        </div>
    )
}

export default DatesAddedBox;