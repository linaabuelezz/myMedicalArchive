import { useContext } from "react";
import { OpeningDialogueContext } from "../../hooks/openingDialogue";

const AddingDateButton = () => {
    const { openDialogue } = useContext(OpeningDialogueContext);
    return (
        <button className="text-white hover:scale-110 font-medium bg-zinc-400 ml-4 rounded-md p-1.5" onClick={() => openDialogue("Add-date")}>
            Add relevant date.
        </button>
    )
}

export default AddingDateButton;
