import { useContext } from "react";
import TempDataContext from "../../hooks/TempDataContext";

const FilesAddedBox = () => {
  const { tempFileData } = useContext(TempDataContext);
  return (
    <div className="border-2 border-black w-64 h-64 rounded-md">
      <h3 className="font-bold ml-1">Added Files:</h3>
      {tempFileData.map((file, index) => (
        <div key={index}>
          <p className="ml-2">
            {file.display_name} 
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilesAddedBox;
