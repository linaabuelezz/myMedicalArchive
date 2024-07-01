import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FileDetails = () => {
    const { fileId } = useParams();
    console.log(fileId);
    const [file, setFile] = useState(null);
    const handleImage = (fileUrl) => {
      window.open(fileUrl, '_blank');
    }

    useEffect(() => {
        const storedBodyParts = JSON.parse(localStorage.getItem('bodyParts'));
        if (storedBodyParts) {
          for (const part in storedBodyParts) {
            const foundFile = storedBodyParts[part].files.find(file => file.asset_id === fileId);
            if (foundFile) {
              setFile(foundFile);
              break;
            }
          }
        }
      }, [fileId]);
    
      if (!file) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h1 onClick={() => handleImage(file.secure_url)}>{file.display_name}</h1>
          <p>{file.newDocDescription}</p>
          <p>{file.newDocDocument}</p>
        </div>
      );
    };
    
    export default FileDetails;



