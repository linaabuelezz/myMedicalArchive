import { OpeningDialogueContext } from "../../hooks/openingDialogue";
import { useContext } from "react";


const AddingFileButton = () => {
    const { openDialogue } = useContext(OpeningDialogueContext);
    return (
        <div className="flex ml-4">
        <button
          onClick={() => openDialogue("Add-file")}
          className=" mb-2  hover:scale-110 font-medium rounded-md p-1.5 bg-zinc-400 text-white"
        >
          Add File.
        </button>
      </div>
    )
}

export default AddingFileButton;