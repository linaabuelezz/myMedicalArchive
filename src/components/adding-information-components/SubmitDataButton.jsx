import { useContext } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";

const SubmitDataButton = () => {
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, tempFileData, chosenBodyPart } =
    useContext(TempDataContext);

  const handleSave = () => {
    console.log(tempFileData);
    console.log(tempDateData);
    console.log(chosenBodyPart);
    console.log(!!tempDateData);
    setBodyParts(
      bodyParts.map((part) => {
        if (part.id === chosenBodyPart) {
          return {
            ...part,
            dates: tempDateData.size
              ? [...part.dates, tempDateData]
              : part.dates,
            files:
              tempFileData.size 
                ? [...part.files, tempFileData]
                : part.files,
          };
        } else {
          return part;
        }
      })
    );
  };

  console.log(bodyParts);

  return (
    <button
      className="border-2 border-black rounded-md p-1 ml-2 font-semibold"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SubmitDataButton;
