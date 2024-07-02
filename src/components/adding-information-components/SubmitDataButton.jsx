import { useContext, useState } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";
import { useToast } from "@/components/ui/use-toast"



const SubmitDataButton = () => {
  const { toast } = useToast();
  const [result, setResult] = useState(false);
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, setTempDateData, setTempFileData, tempFileData, chosenBodyPart } =
    useContext(TempDataContext);

  const handleSave = () => {
    const updatedBodyParts =
      bodyParts.map((part) => {
        if (part.id === chosenBodyPart && (tempDateData !== null && tempFileData !== null)) {
          setResult(true);
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

  const displayToast = (result) => {
    if (result === true) {
      toast({
        title: "Successfull upload",
        description: "Head to home to view your files",
      })
      setResult(false);
    } else {
      toast({
        title: "Failed upload",
        description: "Please upload an event or a file.",
      })
    }
  }


  return (
    <button
      className="bg-zinc-400 text-white rounded-md p-1.5 ml-2 font-bold w-20 mt-4 hover:scale-110"
      onClick={() => {handleSave();
         displayToast(result);}}
    >
      Save
    </button>
  );
};

export default SubmitDataButton;
