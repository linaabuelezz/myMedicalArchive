import { OpeningDialogueContext } from "../../hooks/openingDialogue";
import { useContext } from "react";


const AddingFileButton = () => {
    const { openDialogue } = useContext(OpeningDialogueContext);
    return (
        <div className="flex ml-4">
        <button
          onClick={() => openDialogue("Add-file")}
          className=" mb-2 border-2 border-black hover:scale-110 font-bold rounded-md p-1"
        >
          Add File.
        </button>
      </div>
    )
}

export default AddingFileButton;