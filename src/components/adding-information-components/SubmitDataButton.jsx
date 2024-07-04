import { useContext } from "react";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import TempDataContext from "../../hooks/TempDataContext";
import { useToast } from "@/components/ui/use-toast"



const SubmitDataButton = () => {
  const { toast } = useToast();
  const { bodyParts, setBodyParts } = useContext(BodyPartsContext);
  const { tempDateData, setTempDateData, setTempFileData, tempFileData, chosenBodyPart } =
    useContext(TempDataContext);

  const handleSave = () => {
    let isSuccess = false;

    const updatedBodyParts = bodyParts.map((part) => {
      if (part.id === chosenBodyPart && (tempDateData.length > 0 || tempFileData.length > 0)) {
        isSuccess = true;
        return {
          ...part,
          dates: tempDateData ? [...part.dates, ...tempDateData] : part.dates,
          files: tempFileData ? [...part.files, ...tempFileData] : part.files,
        };
      } else {
        return part;
      }
    });

    setBodyParts(updatedBodyParts);
    localStorage.setItem('bodyParts', JSON.stringify(updatedBodyParts));
    setTempDateData([]);
    setTempFileData([]);

    displayToast(isSuccess);
  };

  const displayToast = (isSuccess) => {
    if (isSuccess) {
      toast({
        title: "Successful upload",
        description: "Head to home to view your files",
      });
    } else {
      toast({
        title: "Failed upload",
        description: "Please upload an event or a file.",
      });
    }
  };

  return (
    <button
      className="bg-zinc-400 text-white rounded-md p-1 ml-4 font-bold w-20 mt-2 hover:scale-110"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SubmitDataButton;
