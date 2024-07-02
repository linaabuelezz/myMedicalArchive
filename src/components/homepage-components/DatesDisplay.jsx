import HomePageContext from "../../hooks/HomePageContext";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import { useContext } from "react";


const DatesDisplay = () => {
    const {bodyParts} = useContext(BodyPartsContext);
    const {chosenBodyPart} = useContext(HomePageContext);
    console.log(chosenBodyPart);
    console.log(bodyParts);
    if (!bodyParts || !chosenBodyPart || !bodyParts[chosenBodyPart]) {
        return <p>No files available</p>;
    }

    const handleDateClick = (date) => {
    
        const newWindow = window.open(`/event/${date.newEventId}`, '_blank');
        if (newWindow) {
          newWindow.eventData = date;
        }
      };
  return (
    <div className="border-2 border-black w-80 h-80 rounded-md ml-4">
      <h3 className="font-bold ml-1">Relevant Dates:</h3>
      <div className="border border-black mb-1"></div>
      {bodyParts[chosenBodyPart - 1].dates.map(
        (date, index) => (
            <div key={index} onClick={() => handleDateClick(date)} className="bg-zinc-400 rounded-sm hover:bg-slate-100 mb-0.5 hover:cursor-pointer">
                <p className="ml-2 text-white hover:text-black font-mono">{date.newEventName}</p>
            </div>
        )
      )}
    </div>
  );
};

export default DatesDisplay;
