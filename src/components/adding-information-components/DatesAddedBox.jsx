import { useContext } from "react";
import TempDataContext from "../../hooks/TempDataContext";

const DatesAddedBox = () => {
  const {tempDateData} = useContext(TempDataContext);
  const boxHeight = 200 + tempDateData.length * 30;
    return (
      <div className="border-2 border-black w-80 h-auto pl-0 mx-2 rounded-md" style={{ height: `${boxHeight}px` }}>
            <h3 className="font-bold ml-1 ">Added Events:</h3>
            <div className="border border-black mb-1"></div>
        {tempDateData.map((file, index) => (
          <div key={index} className="bg-blue-500 font-mono rounded-sm mb-0.5">
            <p className="ml-2 text-white">{file.newEventName} : {file.newEventDate}</p>
          </div>
        ))}
        </div>
    )
}

export default DatesAddedBox;