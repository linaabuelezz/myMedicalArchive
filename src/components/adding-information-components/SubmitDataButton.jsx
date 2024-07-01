import { useContext } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";


const SubmitDataButton = () => {
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, setTempDateData, setTempFileData, tempFileData, chosenBodyPart } =
    useContext(TempDataContext);

  const handleSave = () => {
    const updatedBodyParts =
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
    setBodyParts(updatedBodyParts);
    localStorage.setItem('bodyParts', JSON.stringify(updatedBodyParts));
    setTempDateData([]);
    setTempFileData([]);
  
  };


  return (
    <button
      className="bg-zinc-400 text-white rounded-md p-1.5 ml-2 font-bold w-20 mt-4 hover:scale-110"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SubmitDataButton;
