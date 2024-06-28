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
    <div className="border-2 border-black w-64 h-64 rounded-md ml-4">
      <h3 className="font-bold ml-1">Relevant Dates:</h3>
      {bodyParts[chosenBodyPart - 1].dates.map(
        (date, index) => (
            <div key={index} onClick={() => handleDateClick(date)}>
                <p>{date.newEventName}</p>
            </div>
        )
      )}
    </div>
  );
};

export default DatesDisplay;
