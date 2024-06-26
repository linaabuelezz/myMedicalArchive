import { useContext } from "react";
import { OpeningDialogueContext } from "../../hooks/openingDialogue";

const AddingDateButton = () => {
    const { openDialogue } = useContext(OpeningDialogueContext);
    return (
        <button className="border-2 border-black hover:scale-110 font-bold ml-4 rounded-md p-1" onClick={() => openDialogue("Add-date")}>
            Add relevant date.
        </button>
    )
}

export default AddingDateButton;
