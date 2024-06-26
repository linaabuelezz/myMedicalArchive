import { useState, createContext } from "react";
import PropTypes from "prop-types";


export const OpeningDialogueContext = createContext(null);

export const OpeningDialogueProvider = ({children}) => {
    const [isDialogueOpen, setDialogueOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const openDialogue = (type) => {
        setDialogueOpen(true);
        setModalType(type);
    }

    const closeDialogue = () => {
        setDialogueOpen(false);
        setModalType("");
    }

    const value={isDialogueOpen, openDialogue, closeDialogue, modalType}
    return (
        <OpeningDialogueContext.Provider value={value}>
            {children}
        </OpeningDialogueContext.Provider>
    )
}

OpeningDialogueProvider.propTypes = {
    children: PropTypes.node
}