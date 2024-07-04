import HomePageContext from "../../hooks/HomePageContext";
import BodyPartsContext from "../../hooks/BodyPartsContext";
import { useContext } from "react";


const FilesDisplay = () => {
    const {bodyParts} = useContext(BodyPartsContext);
    const {chosenBodyPart} = useContext(HomePageContext);
    console.log(chosenBodyPart);
    console.log(bodyParts);
    const handleImage = (fileUrl) => {
      window.open(fileUrl, '_blank');
    }
    // if (!bodyParts || !chosenBodyPart || !bodyParts[chosenBodyPart]) {
    //     return <p>No files available</p>;
    // }


  return (
    <div className="bg-white border-2 border-black w-80 h-80 rounded-md ml-2">
      <h3 className="font-bold ml-1">Relevant Files:</h3>
      <div className="border border-black mb-1"></div>
      {bodyParts[chosenBodyPart - 1].files.map(
        (file, index) => (
            <div key={index} onClick={() => handleImage(file.secure_url)} className="bg-zinc-400 hover:bg-slate-100 rounded-sm mb-0.5 hover:cursor-pointer">
                <p className="ml-2 text-white hover:text-black font-mono">{file.display_name}</p>
                {console.log(file.display_name)}
            </div>
        )
      )}
    </div>
  );
};

export default FilesDisplay;
