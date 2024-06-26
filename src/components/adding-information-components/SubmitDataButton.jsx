import { useContext } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";

const SubmitDataButton = () => {
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, setTempDateData, setTempFileData, tempFileData, chosenBodyPart } =
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
            dates: tempDateData!== null
              ? [...part.dates, ...tempDateData]
              : part.dates,
            files:
              tempFileData!== null
                ? [...part.files, ...tempFileData]
                : part.files,
          };
        } else {
          return part;
        }
      })
    );
    setTempDateData([]);
    setTempFileData([]);
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
