import { useContext } from "react";
import TempDataContext from "../../hooks/TempDataContext";

const FilesAddedBox = () => {
  const { tempFileData } = useContext(TempDataContext);
  return (
    <div className="border-2 border-black w-80 h-80 rounded-md">
      <h3 className="font-bold ml-1">Added Files:</h3>
      {tempFileData.map((file, index) => (
        <div key={index} className="bg-blue-500 font-mono rounded-sm mb-0.5">
          <p className="ml-2 text-white">
            {file.display_name} 
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilesAddedBox;
