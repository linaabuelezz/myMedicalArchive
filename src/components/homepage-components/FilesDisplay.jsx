import HomePageContext from "../../hooks/HomePageContext";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import { useContext } from "react";


const FilesDisplay = () => {
    const {bodyParts} = useContext(BodyPartsContext);
    const {chosenBodyPart} = useContext(HomePageContext);
    console.log(chosenBodyPart);
    console.log(bodyParts);
    if (!bodyParts || !chosenBodyPart || !bodyParts[chosenBodyPart]) {
        return <p>No files available</p>;
    }

    const handleFileClick = (file) => {
    
      const newWindow = window.open(`/file/${file.asset_id}`, '_blank');
      if (newWindow) {
        newWindow.fileData = file;
      }
    };

  return (
    <div className="border-2 border-black w-64 h-64 rounded-md ml-2">
      <h3 className="font-bold ml-1">Relevant Files:</h3>
      {bodyParts[chosenBodyPart - 1].files.map(
        (file, index) => (
            <div key={index} onClick={() => handleFileClick(file)}>
                <p>{file.display_name}</p>
                {console.log(file.display_name)}
            </div>
        )
      )}
    </div>
  );
};

export default FilesDisplay;
