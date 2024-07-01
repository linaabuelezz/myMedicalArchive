import { useContext } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";
import Axios from 'axios';


const SubmitDataButton = () => {
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, setTempDateData, setTempFileData, tempFileData, chosenBodyPart } =
    useContext(TempDataContext);

  const handleSave = () => {
    console.log(tempFileData);
    console.log(tempDateData);
    console.log(chosenBodyPart);
    console.log(!!tempDateData);
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
  //   const formData = new FormData();
  //   formData.append("file",bodyParts[chosenBodyPart].files);
  //   formData.append("upload_preset","mvkuuexb");

  //   Axios.post("https://api.cloudinary.com/v1_1/dmwv5ipj2/image/upload".formData).then((response) => console.log(response))
  };

  console.log(bodyParts);

  return (
    <button
      className="bg-blue-600 text-white rounded-md p-1.5 ml-2 font-bold w-20 mt-4 hover:scale-110"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SubmitDataButton;
